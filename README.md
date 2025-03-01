

# Real-Time Weather Monitoring System

## Overview

This is a real-time weather monitoring system built using HTML, CSS, and JavaScript. It retrieves weather data from the [OpenWeatherMap API](https://openweathermap.org/) and processes it to provide a daily weather summary with alerts. The system supports weather updates for major metro cities in India (Delhi, Mumbai, Chennai, Bangalore, Kolkata, Hyderabad) and displays temperature trends, conditions, and alerts for threshold violations.

## Features

- Retrieves weather data from OpenWeatherMap API for major Indian cities.
- Converts temperature from Kelvin to Celsius (configurable to Fahrenheit as per user preference).
- Provides daily roll-ups and aggregates such as:
  - Average Temperature
  - Maximum Temperature
  - Minimum Temperature
  - Dominant Weather Condition
- Configurable alerting system based on temperature thresholds.
- Automatically refreshes weather data every 5 minutes.
- User-friendly dashboard for real-time and summarized weather data.
  
## Table of Contents
1. [Setup](#setup)
2. [Usage](#usage)
3. [Configuration](#configuration)
4. [Features](#features)
5. [Alerts](#alerts)
6. [Test Cases](#test-cases)
7. [Bonus](#bonus)

## Setup

### Prerequisites

- You will need an API key from the OpenWeatherMap platform. [Sign up here](https://openweathermap.org/) to get a free API key.
  
### Dependencies

1. Web browser with JavaScript support.
2. API Key from OpenWeatherMap.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weather-monitoring-system.git
   cd weather-monitoring-system
   ```
2. **Update your OpenWeatherMap API key**:
In the script.js file, replace the placeholder your_openweather_api_key with your actual API key.
   ```javascript
   const API_KEY = 'your_openweather_api_key';
   ```
3. **Open index.html in a web browser**:
   ```bash
   open index.html
   ```
The system will automatically fetch weather data for Indian metro cities and update the dashboard every 5 minutes.

## Usage
- **Dashboard**: Displays real-time weather conditions for selected Indian cities.
   - Temperature (in °C)
   - Feels like temperature
   - Weather condition (e.g., Rain, Clear, Snow)
   - Last update time
- **Daily Summary**: Displays aggregate weather data for the current day.
   - Average, Max, Min temperatures
   - Dominant weather condition (e.g., Rain, Clear)
- **Alerts**: Displays alerts if the temperature exceeds the defined threshold (default is 35°C).

## Configuration
You can configure the system by modifying values in the script.js file:
- **API Key**: Replace with your OpenWeatherMap API key.
   ```javascript
   const API_KEY = 'your_openweather_api_key';
   ```
- **Cities**: Add or remove cities from the CITIES array.
   ```javascript
   const CITIES = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
   ```
- **Alert Threshold**: Set a custom temperature threshold for triggering alerts.
   ```javascript
   const THRESHOLD_TEMP = 35; // Temperature threshold in Celsius
   ```
- **Update Interval**: Adjust the frequency of weather updates (in milliseconds).
   ```javascript
   const INTERVAL = 5 * 60 * 1000; // Update interval in milliseconds (5 minutes)
   ```
   
## API
The system retrieves weather data from the OpenWeatherMap API. API calls are made using the fetch() method in JavaScript.

For more details on the OpenWeatherMap API and available parameters, check the API documentation.

## Features
   - **Real-time Weather Data Retrieval**: Fetches live weather data for Indian metros.
   - **Temperature Conversion**: Converts temperature from Kelvin to Celsius (configurable).
   - **Daily Rollups**: Aggregates weather data daily, including:
      - Average Temperature
      - Maximum Temperature
      - Minimum Temperature
      - Dominant Weather Condition (e.g., Rain, Snow, Clear)
   - **Alerts**: Generates alerts when a specified threshold is breached (e.g., temperature > 35°C).
     
## Alerts
- Alerts are triggered when temperature thresholds are violated. For example, if the temperature exceeds 35°C for two consecutive updates, an alert will be triggered and displayed on the dashboard.

## Test Cases
1. **System Setup**:
   - Verify system starts successfully and connects to the OpenWeatherMap API using a valid API key.
2. **Data Retrieval**:
   - Simulate API calls at configurable intervals.
   - Ensure the system retrieves weather data for the specified locations and parses the response correctly.
3. **Temperature Conversion**:
   - Test conversion of temperature values from Kelvin to Celsius (or Fahrenheit) based on user preference.
4. **Daily Weather Summary**:
   - Simulate a sequence of weather updates for several days.
   - Verify that daily summaries are calculated correctly, including average, maximum, minimum temperatures, and dominant weather conditions.
5. **Alerting Thresholds**:
   - Define and configure user thresholds for temperature or weather conditions.
   - Simulate weather data exceeding or breaching the thresholds.
   - Verify that alerts are triggered only when a threshold is violated.
     
## Bonus
   - Extend the system to support additional weather parameters from the OpenWeatherMap API (e.g., humidity, wind speed) and incorporate them into rollups/aggregates.
   - Explore functionalities like weather forecasts retrieval and generating summaries based on predicted conditions.   
