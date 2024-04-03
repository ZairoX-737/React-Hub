import React from "react";
import { MdOutlineCalendarMonth, MdLocationOn } from "react-icons/md";

const WeatherWidget = ({ weatherData, date }) => {
  return (
    <div>
      <div className="weather-container">
        <span> Now </span>

        <div className="weather-container-items">
          <div className="weather-temperature">
            <h1>{Math.round(weatherData.main.temp)}&deg;C</h1>
            <img
              alt="weather-icon"
              className="icon-small"
              src={`icons/${weatherData.weather[0].icon}.png`}
              width="100"
            />
          </div>

          <p className="weather-description">
            {weatherData.weather[0].description}
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
            <p>{weatherData.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
