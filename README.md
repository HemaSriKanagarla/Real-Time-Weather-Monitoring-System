# Zeotap-Assignment-2

# Real-Time Weather Monitoring System

This project implements a real-time data processing system for weather monitoring using the OpenWeatherMap API. The system retrieves weather data for various Indian metros, processes the data to provide daily rollups and aggregates, and triggers alerts based on configurable thresholds.

## Features

- Continuous weather data retrieval at configurable intervals.
- Temperature conversion from Kelvin to Celsius/Fahrenheit.
- Daily weather summaries including average, maximum, minimum temperatures, and dominant weather condition.
- User-configurable alert thresholds for temperature and weather conditions.
- Visualizations for daily summaries, historical trends, and triggered alerts.
- Extendable to include additional weather parameters like humidity, wind speed.
- Optional weather forecast retrieval and analysis.

## Prerequisites

- [Docker](https://www.docker.com/)
- [OpenWeatherMap API Key](https://openweathermap.org/api)
- Python 3.9+
- Optional: Mail Server for alert notifications.

## Dependencies

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-monitor.git
   ```
2. Install required Python dependencies:
  ```bash
  pip install -r requirements.txt
  ```
3. Set up your .env file:
  ```bash
  OPENWEATHERMAP_API_KEY=your_api_key_here
  ```

## Usage
1. Start Docker Containers (Database, Web Server):
  ```bash
  docker-compose up -d
  ```
2. Run the application:
  ```bash
  python main.py
  ```
3. **Access the web-based UI for visualizations**: Open http://localhost:5000 in your browser to view daily weather summaries, historical trends, and triggered alerts.

## Configuration
You can configure the following parameters in the config.py file:

- Cities: List of Indian metros to monitor.
- Update Interval: The frequency at which weather data is retrieved (e.g., every 5 minutes).
- Alert Thresholds: Set thresholds for temperature or weather conditions.
- User Preferences: Specify temperature conversion (Celsius or Fahrenheit).

## Rollups and Aggregates
- **Daily Weather Summary**:
  - Average temperature
  - Maximum temperature
  - Minimum temperature
  - Dominant weather condition (based on frequency)
- **Alerts**: Alerts are triggered when:
  - The temperature exceeds a defined threshold (e.g., 35°C for two consecutive updates).
  - Other weather conditions breach the user-defined thresholds.
    
## Testing
1. **System Setup**: Verify API key connection and correct initialization.
2. **Data Retrieval**: Simulate API calls and ensure weather data is parsed correctly.
3. **Temperature Conversion**: Test Kelvin to Celsius/Fahrenheit conversions based on user settings.
4. **Daily Weather Summary**: Simulate several days of weather updates and validate rollups/aggregates.
5. **Alerting Thresholds**: Simulate weather conditions exceeding thresholds and verify alerts.


## Future Enhancements
- Support for additional weather parameters (humidity, wind speed).
- Incorporation of weather forecasts and predictive analysis.
- Integration with external notification systems (e.g., email or SMS).
  
## License
This project is licensed under the MIT License. See the LICENSE file for details.   
