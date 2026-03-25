import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import "../styles/Weather.css";

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  const API_KEY = "2e4db2cb18a1547b0a5fcc58896ea665"; // 🔴 PUT YOUR REAL KEY

  const searchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await response.json();

      console.log(data); // ✅ VERY IMPORTANT (for debugging)

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found or API issue!");
        setWeather(null);
      }

    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🌤 Weather Dashboard</h1>

      <SearchBar searchWeather={searchWeather} />

      <WeatherCard weather={weather} />
    </div>
  );
}

export default WeatherApp;