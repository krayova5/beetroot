import React, { useState } from 'react';

const API_KEY = 'YOUR_API_KEY';

function WeatherApp() {
  const [location, setLocation] = useState('');
  const [forecastType, setForecastType] = useState('current');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleForecastTypeChange = (event) => {
    setForecastType(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setWeatherData(null);
    setLoading(true);

    try {
      const url = `https://api.openweathermap.org/data/2.5/${forecastType}?q=${location}&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
      } else {
        setError(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
        <label>
          Forecast Type:
          <select value={forecastType} onChange={handleForecastTypeChange}>
            <option value="current">Current Weather</option>
            <option value="forecast">5-day Forecast</option>
            <option value="forecast/hourly">3-hour Forecast</option>
          </select>
        </label>
        <button type="submit">Get Forecast</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div>
          <h2>Weather Forecast</h2>
          <p>Location: {weatherData.name}</p>
          {forecastType === 'current' && (
            <div>
              <p>Temperature: {weatherData.main.temp}</p>
              <p>Description: {weatherData.weather[0].description}</p>
            </div>
          )}
          {forecastType === 'forecast' && (
            <ul>
              {weatherData.list.map((item) => (
                <li key={item.dt}>
                  <p>Date/Time: {item.dt_txt}</p>
                  <p>Temperature: {item.main.temp}</p>
                  <p>Description: {item.weather[0].description}</p>
                </li>
              ))}
            </ul>
          )}
          {forecastType === 'forecast/hourly' && (
            <ul>
              {weatherData.list.map((item) => (
                <li key={item.dt}>
                  <p>Date/Time: {item.dt_txt}</p>
                  <p>Temperature: {item.main.temp}</p>
                  <p>Description: {item.weather[0].description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default WeatherApp;