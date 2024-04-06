import React from 'react'

const WeatherTodayAt = ({ forecastData }) => {
  return (
    <div className="todayat-main">
      <h4>Today at</h4>
      <div className="todayat-container">
        <div className="todayat-item-container">
          <div className="todayat-item">
            <h4>2 AM</h4>
            <img
              alt="weather-icon"
              className="icon-small"
              src={`icons/10n.png`}
            />
            <h4>20&deg;</h4>
          </div>
          <div className="todayat-item">weather</div>
          <div className="todayat-item">weather</div>
          <div className="todayat-item">weather</div>
          <div className="todayat-item">weather</div>
          <div className="todayat-item">weather</div>
          <div className="todayat-item">weather</div>
          <div className="todayat-item">weather</div>
        </div>

        <div className="todayat-item-container">
          <div className="todayat-item">
            <h4>2 AM</h4>
            <img
              alt="weather-icon"
              className="icon-small"
              src={`icons/direction.png`}
            />
            <h4>6 km/h</h4>
          </div>
          <div className="todayat-item">wind</div>
          <div className="todayat-item">wind</div>
          <div className="todayat-item">wind</div>
          <div className="todayat-item">wind</div>
          <div className="todayat-item">wind</div>
          <div className="todayat-item">wind</div>
          <div className="todayat-item">wind</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherTodayAt