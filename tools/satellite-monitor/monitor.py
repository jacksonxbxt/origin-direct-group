"""
Satellite Crop Monitor - Origin Direct Trading

Pulls free weather/climate data, compares to historical averages,
and generates alerts when anomalies suggest upcoming supply shortages.

Data sources:
  - NASA POWER API (precipitation, temperature, humidity)
  - NOAA CPC (ENSO/ONI data)

Run: python monitor.py
"""

import json
import os
import sys
import time
import hashlib
from datetime import datetime, timedelta
from pathlib import Path

import requests
import pandas as pd
from jinja2 import Environment, FileSystemLoader

from config import (
    MONITORING_POINTS, NASA_POWER_BASE, NASA_POWER_CLIMATOLOGY,
    NOAA_ENSO_URL, POWER_PARAMS,
    DROUGHT_THRESHOLD, FLOOD_THRESHOLD, SEVERE_DROUGHT_THRESHOLD,
    EL_NINO_THRESHOLD, LA_NINA_THRESHOLD, EL_NINO_SENSITIVE,
    CONSECUTIVE_DROUGHT_MONTHS,
    DATA_DIR, REPORTS_DIR, CACHE_DIR,
)

SCRIPT_DIR = Path(__file__).parent.resolve()


def ensure_dirs():
    for d in [DATA_DIR, REPORTS_DIR, CACHE_DIR]:
        (SCRIPT_DIR / d).mkdir(parents=True, exist_ok=True)


# ---------------------------------------------------------------------------
# Network helpers with retry + caching
# ---------------------------------------------------------------------------

def cache_path(url: str, params: dict = None) -> Path:
    """Deterministic cache file for a request."""
    key = url + json.dumps(params or {}, sort_keys=True)
    h = hashlib.md5(key.encode()).hexdigest()
    return SCRIPT_DIR / CACHE_DIR / f"{h}.json"


def fetch_json(url: str, params: dict = None, max_retries: int = 4, cache_hours: int = 6) -> dict:
    """GET request with exponential-backoff retry and disk cache."""
    cp = cache_path(url, params)
    if cp.exists():
        age_h = (time.time() - cp.stat().st_mtime) / 3600
        if age_h < cache_hours:
            return json.loads(cp.read_text(encoding="utf-8"))

    for attempt in range(max_retries):
        try:
            resp = requests.get(url, params=params, timeout=30)
            resp.raise_for_status()
            data = resp.json()
            cp.write_text(json.dumps(data, indent=2), encoding="utf-8")
            return data
        except (requests.RequestException, json.JSONDecodeError) as e:
            wait = 2 ** attempt
            print(f"  [retry {attempt+1}/{max_retries}] {e} -- waiting {wait}s")
            time.sleep(wait)
    raise RuntimeError(f"Failed after {max_retries} retries: {url}")


def fetch_text(url: str, max_retries: int = 4, cache_hours: int = 12) -> str:
    """GET text with retry and cache."""
    cp = cache_path(url)
    if cp.exists():
        age_h = (time.time() - cp.stat().st_mtime) / 3600
        if age_h < cache_hours:
            return cp.read_text(encoding="utf-8")

    for attempt in range(max_retries):
        try:
            resp = requests.get(url, timeout=30)
            resp.raise_for_status()
            cp.write_text(resp.text, encoding="utf-8")
            return resp.text
        except requests.RequestException as e:
            wait = 2 ** attempt
            print(f"  [retry {attempt+1}/{max_retries}] {e} -- waiting {wait}s")
            time.sleep(wait)
    raise RuntimeError(f"Failed after {max_retries} retries: {url}")


# ---------------------------------------------------------------------------
# Data fetching
# ---------------------------------------------------------------------------

def get_recent_weather(point, months_back=3):
    """Fetch daily weather for the last N months from NASA POWER."""
    today = datetime.utcnow().date()
    # NASA POWER data has ~5 day lag, so end a week ago to be safe
    end = today - timedelta(days=7)
    start = end - timedelta(days=months_back * 31)

    params = {
        "parameters": POWER_PARAMS,
        "community": "AG",
        "longitude": point.lon,
        "latitude": point.lat,
        "start": start.strftime("%Y%m%d"),
        "end": end.strftime("%Y%m%d"),
        "format": "JSON",
    }
    print(f"  Fetching weather: {point.name} ({start} to {end})")
    data = fetch_json(NASA_POWER_BASE, params)

    # Parse into monthly averages
    props = data.get("properties", {}).get("parameter", {})
    if not props:
        print(f"  WARNING: No data returned for {point.name}")
        return None

    precip = props.get("PRECTOTCORR", {})
    temp = props.get("T2M", {})
    humidity = props.get("RH2M", {})

    # Build monthly aggregates
    monthly = {}
    for date_str, val in precip.items():
        if val < 0:  # missing data sentinel
            continue
        month_key = date_str[:6]  # YYYYMM
        if month_key not in monthly:
            monthly[month_key] = {"precip_days": [], "temp_days": [], "humid_days": []}
        monthly[month_key]["precip_days"].append(val)
        t = temp.get(date_str, -999)
        if t > -999:
            monthly[month_key]["temp_days"].append(t)
        h = humidity.get(date_str, -999)
        if h > -999:
            monthly[month_key]["humid_days"].append(h)

    results = {}
    for mk, v in sorted(monthly.items()):
        results[mk] = {
            "precip_avg_mm_day": sum(v["precip_days"]) / len(v["precip_days"]) if v["precip_days"] else 0,
            "temp_avg_c": sum(v["temp_days"]) / len(v["temp_days"]) if v["temp_days"] else 0,
            "humidity_avg": sum(v["humid_days"]) / len(v["humid_days"]) if v["humid_days"] else 0,
            "days_counted": len(v["precip_days"]),
        }
    return results


def get_climatology(point):
    """Fetch long-term monthly climatology from NASA POWER."""
    params = {
        "parameters": "PRECTOTCORR,T2M",
        "community": "AG",
        "longitude": point.lon,
        "latitude": point.lat,
        "format": "JSON",
    }
    print(f"  Fetching climatology: {point.name}")
    data = fetch_json(NASA_POWER_CLIMATOLOGY, params, cache_hours=168)  # cache 1 week

    props = data.get("properties", {}).get("parameter", {})
    precip_clim = props.get("PRECTOTCORR", {})
    temp_clim = props.get("T2M", {})

    # Keys are month abbreviations: "JAN", "FEB", ..., "DEC", plus "ANN" for annual
    month_abbrs = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                   "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    result = {}
    for m in range(1, 13):
        abbr = month_abbrs[m - 1]
        result[str(m)] = {
            "precip_avg_mm_day": precip_clim.get(abbr, 0),
            "temp_avg_c": temp_clim.get(abbr, 0),
        }
    return result


def get_enso_status():
    """Fetch latest ENSO ONI data from NOAA."""
    print("Fetching ENSO data from NOAA...")
    try:
        text = fetch_text(NOAA_ENSO_URL)
    except Exception as e:
        print(f"  WARNING: Could not fetch ENSO data: {e}")
        return None

    # Parse the ONI table - format: SEAS  YEAR  TOTAL  ANOM
    lines = [l.strip() for l in text.strip().split("\n") if l.strip()]
    # Find the last data line
    last_line = None
    for line in reversed(lines):
        parts = line.split()
        if len(parts) >= 4:
            try:
                float(parts[-1])
                last_line = parts
                break
            except ValueError:
                continue

    if not last_line:
        return None

    season = last_line[0]
    year = last_line[1]
    oni_value = float(last_line[-1])

    if oni_value >= EL_NINO_THRESHOLD:
        phase = "El Nino"
    elif oni_value <= LA_NINA_THRESHOLD:
        phase = "La Nina"
    else:
        phase = "Neutral"

    return {
        "season": f"{season} {year}",
        "oni_value": oni_value,
        "phase": phase,
    }


# ---------------------------------------------------------------------------
# Analysis
# ---------------------------------------------------------------------------

def analyze_point(point, recent, climatology):
    """Compare recent weather to climatology, return analysis dict."""
    analysis = {
        "name": point.name,
        "lat": point.lat,
        "lon": point.lon,
        "commodity": point.commodity,
        "region_group": point.region_group,
        "months": {},
        "alerts": [],
        "status": "ok",
    }

    if not recent or not climatology:
        analysis["status"] = "no_data"
        return analysis

    consecutive_drought = 0

    for month_key in sorted(recent.keys()):
        month_num = int(month_key[4:6])
        clim = climatology.get(str(month_num), {})
        rec = recent[month_key]

        clim_precip = clim.get("precip_avg_mm_day", 0)
        curr_precip = rec.get("precip_avg_mm_day", 0)

        # Minimum threshold: skip anomaly detection when both values are
        # very low (dry season noise). Need at least 0.5 mm/day average
        # for deviation to be meaningful.
        min_meaningful = 0.5
        if clim_precip > min_meaningful:
            deviation = (curr_precip - clim_precip) / clim_precip
        elif curr_precip > min_meaningful and clim_precip <= min_meaningful:
            deviation = 1.0  # unexpected rain in dry season
        else:
            deviation = 0  # both near zero, normal dry season

        month_analysis = {
            "month": month_key,
            "precip_current": curr_precip,
            "precip_avg": clim_precip,
            "precip_deviation": round(deviation * 100, 1),
            "temp_current": rec.get("temp_avg_c", 0),
            "temp_avg": clim.get("temp_avg_c", 0),
            "humidity": rec.get("humidity_avg", 0),
        }
        analysis["months"][month_key] = month_analysis

        # Check drought
        if deviation <= DROUGHT_THRESHOLD:
            consecutive_drought += 1
        else:
            consecutive_drought = 0

        # Check flood/excess
        if deviation >= FLOOD_THRESHOLD:
            analysis["alerts"].append({
                "type": "excess_rainfall",
                "severity": "warning" if deviation < 1.0 else "alert",
                "month": month_key,
                "deviation_pct": round(deviation * 100, 1),
                "title": f"Excess rainfall: {point.name}",
                "detail": f"{month_key}: {round(deviation*100)}% above average ({curr_precip:.1f} vs {clim_precip:.1f} mm/day). Flood/disease risk for {point.commodity}.",
            })

        if deviation <= SEVERE_DROUGHT_THRESHOLD:
            analysis["alerts"].append({
                "type": "severe_drought",
                "severity": "alert",
                "month": month_key,
                "deviation_pct": round(deviation * 100, 1),
                "title": f"Severe drought: {point.name}",
                "detail": f"{month_key}: {round(deviation*100)}% below average ({curr_precip:.1f} vs {clim_precip:.1f} mm/day). Critical for {point.commodity}.",
            })
        elif consecutive_drought >= CONSECUTIVE_DROUGHT_MONTHS:
            analysis["alerts"].append({
                "type": "consecutive_drought",
                "severity": "alert",
                "month": month_key,
                "deviation_pct": round(deviation * 100, 1),
                "title": f"Persistent drought: {point.name}",
                "detail": f"{consecutive_drought} consecutive months below average. Supply risk for {point.commodity}.",
            })

    # Set overall status
    if any(a["severity"] == "alert" for a in analysis["alerts"]):
        analysis["status"] = "alert"
    elif any(a["severity"] == "warning" for a in analysis["alerts"]):
        analysis["status"] = "warning"

    return analysis


def assess_commodity_impacts(analyses, enso):
    """Generate commodity-level impact assessments."""
    commodity_data = {}
    for a in analyses:
        c = a["commodity"]
        if c not in commodity_data:
            commodity_data[c] = {"analyses": [], "alerts": []}
        commodity_data[c]["analyses"].append(a)
        commodity_data[c]["alerts"].extend(a["alerts"])

    impacts = []
    for commodity, data in sorted(commodity_data.items()):
        alert_count = len(data["alerts"])
        severe_count = sum(1 for a in data["alerts"] if a["severity"] == "alert")

        if severe_count >= 2:
            risk_level = "high"
            risk_label = "HIGH RISK"
        elif alert_count >= 2 or severe_count >= 1:
            risk_level = "medium"
            risk_label = "MEDIUM RISK"
        else:
            risk_level = "low"
            risk_label = "LOW RISK"

        # ENSO overlay
        enso_note = ""
        if enso and enso["phase"] == "El Nino" and commodity in EL_NINO_SENSITIVE:
            if risk_level == "low":
                risk_level = "medium"
                risk_label = "MEDIUM RISK"
            enso_note = f" El Nino conditions ({enso['oni_value']:+.1f}) add pressure."

        regions = ", ".join(a["name"] for a in data["analyses"])
        if alert_count > 0:
            alert_types = set(a["type"] for a in data["alerts"])
            type_str = ", ".join(t.replace("_", " ") for t in alert_types)
            detail = f"Monitoring: {regions}. Issues: {type_str} ({alert_count} alerts).{enso_note}"
        else:
            detail = f"Monitoring: {regions}. All regions within normal parameters.{enso_note}"

        impacts.append({
            "commodity": commodity,
            "risk_level": risk_level,
            "risk_label": risk_label,
            "detail": detail,
            "alert_count": alert_count,
        })

    impacts.sort(key=lambda x: {"high": 0, "medium": 1, "low": 2}[x["risk_level"]])
    return impacts


# ---------------------------------------------------------------------------
# Map projection (simple Mercator-ish for the report)
# ---------------------------------------------------------------------------

def project_points(analyses):
    """Convert lat/lon to x/y percentages for the map div."""
    # Our points span roughly: lat 5-27, lon -3 to 79
    # Add padding
    min_lon, max_lon = -5, 82
    min_lat, max_lat = 3, 29

    points = []
    for a in analyses:
        x_pct = ((a["lon"] - min_lon) / (max_lon - min_lon)) * 100
        y_pct = (1 - (a["lat"] - min_lat) / (max_lat - min_lat)) * 100  # invert y
        points.append({
            "name": a["name"],
            "commodity": a["commodity"],
            "status": a["status"],
            "x": round(x_pct, 1),
            "y": round(y_pct, 1),
        })
    return points


# ---------------------------------------------------------------------------
# Report generation
# ---------------------------------------------------------------------------

def build_report_context(analyses, enso, commodity_impacts):
    """Build the Jinja2 template context."""
    # Get the latest month data for each region for the summary table
    region_groups = {}
    all_alerts = []

    for a in analyses:
        group = a["region_group"]
        if group not in region_groups:
            region_groups[group] = []

        # Use latest month
        if a["months"]:
            latest_key = max(a["months"].keys())
            m = a["months"][latest_key]
        else:
            m = {"precip_current": 0, "precip_avg": 0, "precip_deviation": 0, "temp_current": 0}

        status_map = {"ok": "OK", "warning": "Watch", "alert": "Alert", "no_data": "No Data"}
        region_groups[group].append({
            "name": a["name"],
            "commodity": a["commodity"],
            "precip_current": m["precip_current"],
            "precip_avg": m["precip_avg"],
            "precip_deviation": m["precip_deviation"],
            "temp_current": m["temp_current"],
            "status": a["status"],
            "status_label": status_map.get(a["status"], a["status"]),
        })
        all_alerts.extend(a["alerts"])

    # Determine data period
    all_months = []
    for a in analyses:
        all_months.extend(a["months"].keys())
    if all_months:
        data_period = f"{min(all_months)[:4]}-{min(all_months)[4:]} to {max(all_months)[:4]}-{max(all_months)[4:]}"
    else:
        data_period = "N/A"

    # Deduplicate and sort alerts (most severe first)
    severity_order = {"alert": 0, "warning": 1}
    all_alerts.sort(key=lambda x: severity_order.get(x["severity"], 2))

    return {
        "report_date": datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC"),
        "data_period": data_period,
        "enso": enso,
        "alerts": all_alerts,
        "region_groups": region_groups,
        "commodity_impacts": commodity_impacts,
        "map_points": project_points(analyses),
    }


def generate_html_report(context):
    env = Environment(loader=FileSystemLoader(str(SCRIPT_DIR)))
    template = env.get_template("report_template.html")
    html = template.render(**context)

    out_path = SCRIPT_DIR / REPORTS_DIR / f"report_{datetime.utcnow().strftime('%Y%m%d_%H%M')}.html"
    out_path.write_text(html, encoding="utf-8")
    # Also write a "latest" symlink/copy
    latest = SCRIPT_DIR / REPORTS_DIR / "latest_report.html"
    latest.write_text(html, encoding="utf-8")
    print(f"\nHTML report: {out_path}")
    print(f"Latest link: {latest}")
    return out_path


def save_json_results(analyses, enso, commodity_impacts):
    ts = datetime.utcnow().strftime("%Y%m%d_%H%M")
    result = {
        "generated_utc": datetime.utcnow().isoformat(),
        "enso": enso,
        "commodity_impacts": commodity_impacts,
        "regions": analyses,
    }
    out_path = SCRIPT_DIR / DATA_DIR / f"monitor_{ts}.json"
    out_path.write_text(json.dumps(result, indent=2, default=str), encoding="utf-8")
    latest = SCRIPT_DIR / DATA_DIR / "latest_monitor.json"
    latest.write_text(json.dumps(result, indent=2, default=str), encoding="utf-8")
    print(f"JSON data:   {out_path}")
    return out_path


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("=" * 60)
    print("  Origin Direct Trading - Satellite Crop Monitor")
    print("=" * 60)
    print()

    ensure_dirs()

    # 1. Fetch ENSO status
    enso = get_enso_status()
    if enso:
        print(f"  ENSO: {enso['phase']} (ONI={enso['oni_value']:+.1f}, {enso['season']})")
    print()

    # 2. Fetch weather data for all monitoring points
    analyses = []
    total = len(MONITORING_POINTS)
    for i, point in enumerate(MONITORING_POINTS, 1):
        print(f"[{i}/{total}] Processing {point.name} ({point.commodity})...")
        try:
            recent = get_recent_weather(point, months_back=3)
            climatology = get_climatology(point)
            analysis = analyze_point(point, recent, climatology)
            analyses.append(analysis)

            if analysis["alerts"]:
                for a in analysis["alerts"]:
                    icon = "!!" if a["severity"] == "alert" else "!"
                    print(f"  {icon} {a['title']}: {a['detail']}")
            else:
                print(f"  OK - within normal range")
        except Exception as e:
            print(f"  ERROR: {e}")
            analyses.append({
                "name": point.name, "lat": point.lat, "lon": point.lon,
                "commodity": point.commodity, "region_group": point.region_group,
                "months": {}, "alerts": [], "status": "no_data",
            })
        # Be polite to NASA's servers
        time.sleep(0.5)

    # 3. Commodity impact assessment
    print("\n" + "-" * 60)
    print("Commodity Impact Assessment:")
    print("-" * 60)
    commodity_impacts = assess_commodity_impacts(analyses, enso)
    for ci in commodity_impacts:
        print(f"  {ci['risk_label']:12s} | {ci['commodity']}: {ci['detail']}")

    # 4. Generate reports
    print("\n" + "-" * 60)
    print("Generating reports...")
    context = build_report_context(analyses, enso, commodity_impacts)
    generate_html_report(context)
    save_json_results(analyses, enso, commodity_impacts)

    # 5. Summary
    alert_count = sum(len(a["alerts"]) for a in analyses)
    print(f"\nDone. {alert_count} alert(s) across {total} monitoring points.")
    if alert_count > 0:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
