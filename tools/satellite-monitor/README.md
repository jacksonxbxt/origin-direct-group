# Satellite Crop Monitor

Monitors weather/climate data for key crop-growing regions and alerts when anomalies suggest upcoming supply shortages.

## Data Sources (all free, no paid API keys)

- **NASA POWER API** - precipitation, temperature, humidity (no auth needed)
- **NOAA CPC** - ENSO/El Nino status (no auth needed)

## Monitored Commodities & Regions

| Commodity | Regions |
|-----------|---------|
| Cocoa | Ghana (Ashanti, Western), Nigeria (Cross River, Ondo) |
| Shea | Ghana (Northern, Upper West), Nigeria (Niger State) |
| Cashew | Ghana (Brong-Ahafo), Nigeria (Benue) |
| Castor/Guar | Gujarat, India |
| Cumin/Guar | Rajasthan, India |
| Turmeric | Tamil Nadu, India |
| Sesame | Jigawa, Nigeria |
| Ginger | Kaduna, Nigeria |

## Setup

```bash
pip install -r requirements.txt
python monitor.py
```

## Output

- `reports/latest_report.html` - visual dashboard
- `data/latest_monitor.json` - machine-readable data
- Timestamped copies in both directories

## Alert Thresholds

- **Drought**: rainfall >30% below average
- **Persistent drought**: 2+ consecutive months below average
- **Flood/disease risk**: rainfall >50% above average
- **El Nino overlay**: adds risk for Indian monsoon + West African cocoa

## Cron Setup

Run daily or weekly:
```
0 6 * * 1 cd /path/to/satellite-monitor && python monitor.py >> monitor.log 2>&1
```
