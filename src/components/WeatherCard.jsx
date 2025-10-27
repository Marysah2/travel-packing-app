import React, { useState } from "react";
import axios from "axios";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError("");
    
    try {
      // Demo weather data - replace with real API when you have a key
      const demoWeather = {
        name: city,
        sys: { country: "Demo" },
        main: {
          temp: Math.floor(Math.random() * 30) + 5,
          feels_like: Math.floor(Math.random() * 30) + 5,
          humidity: Math.floor(Math.random() * 50) + 30,
          pressure: Math.floor(Math.random() * 100) + 1000
        },
        weather: [{
          description: "partly cloudy",
          icon: "02d"
        }],
        wind: {
          speed: Math.floor(Math.random() * 10) + 2
        }
      };
      
      // Simulate API delay
      setTimeout(() => {
        setWeather(demoWeather);
      }, 500);
    } catch (err) {
      setError("Demo mode - showing sample weather");
      setWeather(null);
    }
    
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getWeather();
    }
  };

  const getWeatherIcon = (weatherCode) => {
    const iconMap = {
      '01d': '☀️', '01n': '🌙',
      '02d': '⛅', '02n': '☁️',
      '03d': '☁️', '03n': '☁️',
      '04d': '☁️', '04n': '☁️',
      '09d': '🌧️', '09n': '🌧️',
      '10d': '🌦️', '10n': '🌧️',
      '11d': '⛈️', '11n': '⛈️',
      '13d': '❄️', '13n': '❄️',
      '50d': '🌫️', '50n': '🌫️'
    };
    return iconMap[weatherCode] || '🌤️';
  };

  return (
    <div className="card">
      <h2>
        Destination Weather
      </h2>
      
      <div className="flex mb-1">
        <input
          placeholder="Enter destination city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{flex: 1, borderRadius: '5px 0 0 5px'}}
        />
        <button 
          onClick={getWeather} 
          disabled={loading}
          style={{borderRadius: '0 5px 5px 0', padding: '0.75rem 1.5rem'}}
        >
          {loading ? "..." : "Search"}
        </button>
      </div>

      {error && (
        <div style={{color: '#d32f2f', textAlign: 'center', marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#ffebee', borderRadius: '5px'}}>
          {error}
        </div>
      )}

      {weather && (
        <div className="weather-card card">
          <div className="weather-icon">
            {getWeatherIcon(weather.weather[0].icon)}
          </div>
          <h3 style={{fontSize: '1.25rem', fontWeight: 'bold'}}>{weather.name}, {weather.sys.country}</h3>
          <div className="weather-temp">
            {Math.round(weather.main.temp)}°C
          </div>
          <p style={{textTransform: 'capitalize', marginBottom: '1rem'}}>{weather.weather[0].description}</p>
          <div className="weather-details">
            <div>Feels like: {Math.round(weather.main.feels_like)}°C</div>
            <div>Humidity: {weather.main.humidity}%</div>
            <div>Wind: {weather.wind.speed} m/s</div>
            <div>Pressure: {weather.main.pressure} hPa</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
