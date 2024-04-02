import React from "react";
import { useState } from "react";
import { MdSearch, MdOutlineCalendarMonth, MdLocationOn } from "react-icons/md";

const api = {
  key: "417ff3f332927adcc72202170c06576e",
  base: "https://api.openweathermap.org/data/2.5/",
};

var date_options = {
  weekday: "long",
  day: "numeric",
  year: "numeric",
};
var date = new Date().toLocaleDateString("en-US", date_options);

const WeatherWidget = () => {
  const [search, setSearch] = useState();
  const [weather, setWeather] = useState({});

  const handleSearch = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div>
      <div className="header">
        <h1>./Weather</h1>
      </div>

      <div>
        <div className="search">
          <MdSearch className="search-icons" size="2em" />
          <input
            type="text"
            placeholder="Type your city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch} className="save">
            {" "}
            Search{" "}
          </button>
        </div>
      </div>

      {typeof weather.main != "undefined" ? (
        <div className="weather-container">
          <span> Now </span>

          <div className="weather-container-items">
            <div className="weather-temperature">
              <h1>{weather.main.temp}&deg;C</h1>
              <div></div>
            </div>

            <p className="weather-description">
              {weather.weather[0].description}
            </p>
            <hr />
          </div>

          <div>
            <div className="weather-footer">
              <MdOutlineCalendarMonth size="1.3em" />
              <p>{date}</p>
            </div>
            <div className="weather-footer">
              <MdLocationOn size="1.3em" />
              <p>{weather.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <h4>
          ./ 404 Not Found <p>check your input</p>
        </h4>
      )}
    </div>
  );
};

export default WeatherWidget;
