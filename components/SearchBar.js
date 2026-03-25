import React, { useState } from "react";

function SearchBar({ searchWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    searchWeather(city);
    setCity("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;