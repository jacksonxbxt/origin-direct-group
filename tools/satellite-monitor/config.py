"""
Configuration for satellite crop monitoring.
Defines monitoring regions, thresholds, and API endpoints.
"""

from dataclasses import dataclass, field
from typing import List

# --- API Endpoints ---

NASA_POWER_BASE = "https://power.larc.nasa.gov/api/temporal/daily/point"
NASA_POWER_CLIMATOLOGY = "https://power.larc.nasa.gov/api/temporal/climatology/point"
NOAA_ENSO_URL = "https://www.cpc.ncep.noaa.gov/data/indices/oni.ascii.txt"

# NASA POWER parameters of interest
POWER_PARAMS = "PRECTOTCORR,T2M,T2M_MAX,T2M_MIN,RH2M"
# PRECTOTCORR = precipitation corrected (mm/day)
# T2M = temperature at 2m (C)
# RH2M = relative humidity at 2m (%)


@dataclass
class MonitoringPoint:
    name: str
    lat: float
    lon: float
    commodity: str
    region_group: str
    growing_season_months: List[int] = field(default_factory=list)  # 1-12


# --- Monitoring Points ---

MONITORING_POINTS = [
    # Cocoa - Ghana
    MonitoringPoint("Ashanti, Ghana", 6.7, -1.6, "Cocoa", "West Africa - Cocoa",
                    growing_season_months=[3, 4, 5, 6, 7, 8, 9, 10]),
    MonitoringPoint("Western, Ghana", 5.5, -2.5, "Cocoa", "West Africa - Cocoa",
                    growing_season_months=[3, 4, 5, 6, 7, 8, 9, 10]),
    # Cocoa - Nigeria
    MonitoringPoint("Cross River, Nigeria", 5.8, 8.5, "Cocoa", "West Africa - Cocoa",
                    growing_season_months=[3, 4, 5, 6, 7, 8, 9, 10]),
    MonitoringPoint("Ondo, Nigeria", 7.1, 4.8, "Cocoa", "West Africa - Cocoa",
                    growing_season_months=[3, 4, 5, 6, 7, 8, 9, 10]),

    # Shea - Ghana + Nigeria
    MonitoringPoint("Northern, Ghana", 9.5, -1.0, "Shea", "West Africa - Shea",
                    growing_season_months=[4, 5, 6, 7, 8, 9]),
    MonitoringPoint("Upper West, Ghana", 10.3, -2.5, "Shea", "West Africa - Shea",
                    growing_season_months=[4, 5, 6, 7, 8, 9]),
    MonitoringPoint("Niger State, Nigeria", 9.6, 6.5, "Shea", "West Africa - Shea",
                    growing_season_months=[4, 5, 6, 7, 8, 9]),

    # Cashew - Ghana + Nigeria
    MonitoringPoint("Brong-Ahafo, Ghana", 7.9, -1.7, "Cashew", "West Africa - Cashew",
                    growing_season_months=[2, 3, 4, 5]),
    MonitoringPoint("Benue, Nigeria", 7.3, 8.5, "Cashew", "West Africa - Cashew",
                    growing_season_months=[2, 3, 4, 5]),

    # Indian Monsoon Crops
    MonitoringPoint("Gujarat, India", 22.3, 71.2, "Castor/Guar", "India - Monsoon",
                    growing_season_months=[6, 7, 8, 9, 10]),
    MonitoringPoint("Rajasthan, India", 26.9, 70.9, "Cumin/Guar", "India - Monsoon",
                    growing_season_months=[6, 7, 8, 9, 10]),
    MonitoringPoint("Tamil Nadu, India", 11.1, 78.7, "Turmeric", "India - Monsoon",
                    growing_season_months=[6, 7, 8, 9, 10, 11]),

    # Sesame + Ginger - Nigeria
    MonitoringPoint("Jigawa, Nigeria", 12.2, 9.6, "Sesame", "Nigeria - Sesame/Ginger",
                    growing_season_months=[6, 7, 8, 9, 10]),
    MonitoringPoint("Kaduna, Nigeria", 10.5, 7.4, "Ginger", "Nigeria - Sesame/Ginger",
                    growing_season_months=[4, 5, 6, 7, 8, 9, 10]),
]

# --- Alert Thresholds ---

# Rainfall deviation thresholds (fraction, not percent)
DROUGHT_THRESHOLD = -0.30        # 30% below average
FLOOD_THRESHOLD = 0.50           # 50% above average
SEVERE_DROUGHT_THRESHOLD = -0.50 # 50% below average

# How many recent months to check for consecutive drought
CONSECUTIVE_DROUGHT_MONTHS = 2

# ENSO thresholds (ONI values)
EL_NINO_THRESHOLD = 0.5
LA_NINA_THRESHOLD = -0.5

# Commodities particularly sensitive to El Nino
EL_NINO_SENSITIVE = ["Cocoa", "Castor/Guar", "Cumin/Guar", "Turmeric"]

# --- Output Config ---

DATA_DIR = "data"
REPORTS_DIR = "reports"
CACHE_DIR = "cache"
