import React from "react";

function WeatherCard({ weather }) {

  if (!weather || weather.cod !== 200) {
    return <p className="no-data">Search a valid city</p>;
  }

  return (
    <div className="weather-card">

      <h2>
        {weather.name}, {weather.sys?.country}
      </h2>

      <h1>{Math.round(weather.main?.temp)}°C</h1>

      <p>{weather.weather?.[0]?.description}</p>

      <div className="details">
        <p>Humidity: {weather.main?.humidity}%</p>
        <p>Wind: {weather.wind?.speed} km/h</p>
      </div>

    </div>
  );
}

export default WeatherCard;

