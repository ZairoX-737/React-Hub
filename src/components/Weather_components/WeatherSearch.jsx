import React from "react";
import { MdSearch, MdOutlineLocationSearching } from "react-icons/md";

const WeatherSearch = ({ setSearch, handleSearch, handleCurrentLocation }) => {
  return (
    <div className="search weather-search">
      <MdSearch className="search-icons" size="2em" />
      <input
        type="text"
        placeholder="Seacrh city/town..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="weather-search-buttons">
        <button className="save" onClick={() => handleSearch()}>
          Search
        </button>
        <button
          className="currentLocation"
          onClick={() => handleCurrentLocation()}
        >
          <MdOutlineLocationSearching size="2em" />
          Current Location
        </button>
      </div>
    </div>
  );
};

export default WeatherSearch;
