import React from "react";

const WeatherTodayAt = ({ forecastData }) => {
  var i = 0;
  const forecast = forecastData.list.filter((e) => ++i <= 8);
  console.log(forecast);

  const handleGetHour = (dt) => {
    const Hours = new Date(dt * 1000);
    return Hours.toLocaleTimeString([], {
      hour: "numeric",
      hour12: true,
    });
  };
  const handleGetDay = (dt) => {
    const Hours = new Date(dt * 1000);
    return Hours.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="todayat-main">
      <h4>Hourly Forecast</h4>
      <div className="todayat-container">
        <div className="todayat-item-container">
          {forecast.map((item, idx) => (
            <div className="todayat-item" key={idx}>
              <h5>{handleGetDay(item.dt)}</h5>
              <h4>{handleGetHour(item.dt)}</h4>
              <img
                alt="weather-icon"
                className="icon-small"
                src={`icons/${item.weather[0].icon}.png`}
              />
              <h4>{Math.round(item.main.temp)}&deg;</h4>
            </div>
          ))}
        </div>

        <div className="todayat-item-container">
          {forecast.map((item, idx) => (
            <div className="todayat-item" key={idx}>
              <img
                alt="weather-icon"
                className="icon-small"
                src={`icons/direction.png`}
                style={{ transform: `rotate(${item.wind.deg}deg)` }}
              />
              <h4>{Math.round(item.wind.speed)} km/h</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherTodayAt;
