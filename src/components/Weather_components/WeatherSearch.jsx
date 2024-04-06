import React from "react";
import { MdSearch, MdOutlineLocationSearching } from "react-icons/md";

const WeatherSearch = ({
  setSearch,
  handleSearch,
  handleCurrentLocation,
  setIsLoading,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCurrentLocationPress = () => {
    handleCurrentLocation();
    setIsLoading(true);
  };

  return (
    <div className="search weather-search">
      <MdSearch className="search-icons" size="2em" />
      <input
        id="search_input"
        type="text"
        placeholder="Seacrh city/town..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
      />

      <div className="weather-search-buttons">
        <button className="save" onClick={() => handleSearch()}>
          Search
        </button>
        <button
          className="currentLocation"
          onClick={() => handleCurrentLocationPress()}
        >
          <MdOutlineLocationSearching size="2em" />
          Current Location
        </button>
      </div>
    </div>
  );
};

export default WeatherSearch;
