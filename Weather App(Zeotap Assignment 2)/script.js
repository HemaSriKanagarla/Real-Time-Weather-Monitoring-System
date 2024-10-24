// Configuration
const API_KEY = 'f4004816ba6a3b148dba0b81d969e1de';
const THRESHOLD_TEMP = 35; // Alert threshold for temperature
let weatherData = {}; // For storing daily weather data

// Fetch weather data from OpenWeatherMap API
async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Convert temperature from Kelvin to Celsius
function kelvinToCelsius(temp) {
    return (temp - 273.15).toFixed(2);
}

// Process and display real-time weather data
async function updateWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    try {
        const data = await fetchWeather(city);
        const currentTemp = kelvinToCelsius(data.main.temp);
        const feelsLike = kelvinToCelsius(data.main.feels_like);
        const mainCondition = data.weather[0].main;
        const timestamp = new Date(data.dt * 1000).toLocaleString();

        // Update the current weather info on the page
        document.getElementById('temp').innerText = currentTemp;
        document.getElementById('feels_like').innerText = feelsLike;
        document.getElementById('main-condition').innerText = mainCondition;
        document.getElementById('last-updated').innerText = timestamp;

        // Store data for daily summary
        storeWeatherData(city, currentTemp, mainCondition);

        // Check for threshold alert
        checkAlert(currentTemp);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data. Please check the city name.");
    }
}

// Store weather data to calculate daily summary
function storeWeatherData(city, temp, condition) {
    const today = new Date().toLocaleDateString();

    // Initialize daily weather data if not present
    if (!weatherData[today]) {
        weatherData[today] = { count: 0, totalTemp: 0, maxTemp: -Infinity, minTemp: Infinity, conditions: {} };
    }

    let dailyData = weatherData[today];
    dailyData.count++;
    dailyData.totalTemp += parseFloat(temp);
    dailyData.maxTemp = Math.max(dailyData.maxTemp, temp);
    dailyData.minTemp = Math.min(dailyData.minTemp, temp);

    // Track dominant condition
    if (!dailyData.conditions[condition]) {
        dailyData.conditions[condition] = 0;
    }
    dailyData.conditions[condition]++;
    
    // Update the daily summary on the page
    updateDailySummary(dailyData);
}

// Calculate and display daily weather summary
function updateDailySummary(dailyData) {
    const avgTemp = (dailyData.totalTemp / dailyData.count).toFixed(2);
    const dominantCondition = Object.keys(dailyData.conditions).reduce((a, b) => 
        dailyData.conditions[a] > dailyData.conditions[b] ? a : b);

    document.getElementById('avg-temp').innerText = avgTemp;
    document.getElementById('max-temp').innerText = dailyData.maxTemp;
    document.getElementById('min-temp').innerText = dailyData.minTemp;
    document.getElementById('dominant-condition').innerText = dominantCondition;
}

// Check if an alert should be triggered
function checkAlert(temp) {
    const alertBox = document.getElementById('alert-msg');
    
    if (temp > THRESHOLD_TEMP) {
        alertBox.innerHTML = `<p>Alert: Temperature exceeded ${THRESHOLD_TEMP}°C!</p>`;
    } else {
        alertBox.innerHTML = `<p>No alerts</p>`;
    }
}
