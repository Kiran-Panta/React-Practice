import React, { useState, useEffect, useRef } from 'react';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lastFetchRef = useRef(null); // useRef for caching - doesn't trigger re-render

  // Interpret weather code to condition
  const getWeatherCondition = (code) => {
    if (code === 0) return 'Clear';
    if (code >= 1 && code <= 3) return 'Cloudy';
    if (code >= 61 && code <= 67) return 'Rain';
    if (code >= 71 && code <= 77) return 'Snow';
    if (code >= 95) return 'Thunderstorm';
    return 'Unknown';
  };

  // Get background color based on condition
  const getBackgroundColor = (condition) => {
    switch (condition) {
      case 'Clear': return 'linear-gradient(to bottom, #87CEEB, #98FB98)'; // sunny
      case 'Cloudy': return 'linear-gradient(to bottom, #D3D3D3, #A9A9A9)'; // gray
      case 'Rain': return 'linear-gradient(to bottom, #4682B4, #000080)'; // blue
      case 'Snow': return 'linear-gradient(to bottom, #FFFFFF, #F0F8FF)'; // white
      case 'Thunderstorm': return 'linear-gradient(to bottom, #2F4F4F, #000000)'; // dark
      default: return 'linear-gradient(to bottom, #87CEEB, #98FB98)';
    }
  };

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=27.7172&longitude=85.3240&current_weather=true');
      if (!response.ok) throw new Error('Failed to fetch weather');
      const data = await response.json();
      setWeather(data.current_weather);
      lastFetchRef.current = Date.now(); // Store fetch time
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Check if data is fresh (less than 10 minutes old)
  const isDataFresh = () => {
    if (!lastFetchRef.current) return false;
    const tenMinutes = 10 * 60 * 1000;
    return Date.now() - lastFetchRef.current < tenMinutes;
  };

  useEffect(() => {
    if (!isDataFresh()) {
      fetchWeather();
    } else {
      setLoading(false); // Data is cached, no need to load
    }
  }, []);

  const handleRefresh = () => {
    fetchWeather();
  };

  if (loading) {
    return (
      <div className="card">
        <div className="card-body text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading weather...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <div className="card-body">
          <div className="alert alert-danger">Weather Error: {error}</div>
          <button className="btn btn-primary" onClick={handleRefresh}>Retry</button>
        </div>
      </div>
    );
  }

  const condition = getWeatherCondition(weather.weathercode);
  const background = getBackgroundColor(condition);

  return (
    <div className="card" style={{ background }}>
      <div className="card-body text-center text-white">
        <h5 className="card-title">Kathmandu Weather</h5>
        <div className="display-4 mb-2">
          {Math.round(weather.temperature)}°C
        </div>
        <p className="mb-1">Wind: {weather.windspeed} km/h</p>
        <p className="mb-3">Condition: {condition}</p>
        <button className="btn btn-light" onClick={handleRefresh}>
          Refresh
        </button>
        <small className="d-block mt-2 opacity-75">
          Last updated: {new Date(lastFetchRef.current).toLocaleTimeString()}
        </small>
      </div>
    </div>
  );
}

export default WeatherWidget;