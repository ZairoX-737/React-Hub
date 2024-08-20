import React from "react";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WeatherForecast = ({ forecastData }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const getNextDayMonth = (idx) => {
    idx = idx + 1;
    const Month = new Date();
    Month.setDate(Month.getDate() + idx);
    // console.log(Month);
    return Month.toLocaleDateString("en-US", { month: "short" });
  };
  const getNextDay = (idx) => {
    idx = idx + 1;
    const Day = new Date();
    Day.setDate(Day.getDate() + idx);
    
    return Day.toLocaleDateString("en-US", { day: "numeric" });
  };

  var i = 0;
  const forecast = forecastData.list.filter((e) => ++i % 8 === 0);
  // console.log(forecast)

  return (
    <div>
      <h2>5 Days Forecast</h2>
      <div className="daily-forecast-container">
        {forecast.map((item, idx) => (
          <div className="daily-forecast-item" key={idx}>
            <div>
              <img
                alt="weather-icon"
                className="icon-small"
                src={`icons/${item.weather[0].icon}.png`}
              />
              <h4>{Math.round(item.main.temp)}&deg;C</h4>
            </div>

            <div className="forecast-description-container">
              <div>
                <span>{forecastDays[idx]},</span>
                <span>{getNextDayMonth(idx)}</span>
                <span>{getNextDay(idx)}</span>
              </div>

              <div>
                <span>{item.weather[0].description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
