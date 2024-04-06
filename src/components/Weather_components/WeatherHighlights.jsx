import React from "react";
import {
  MdAir,
  MdSunny,
  MdNightsStay,
  MdOutlineWaterDrop,
  MdWaves,
  MdOutlineVisibility,
  MdOutlineThermostat,
} from "react-icons/md";

const WeatherHighlights = ({ airData, weatherData }) => {
  const airComponents = airData.list[0];
  const renderSwitch = (aqi) => {
    switch (aqi) {
      case 1:
        return (
          <div className="aqi-status" style={{ backgroundColor: "#9ce61a" }}>
            Very Good
          </div>
        );
      case 2:
        return (
          <div className="aqi-status" style={{ backgroundColor: "lightgreen" }}>
            Good
          </div>
        );
      case 3:
        return (
          <div className="aqi-status" style={{ backgroundColor: "#f2e852" }}>
            Poor
          </div>
        );
      case 4:
        return (
          <div className="aqi-status" style={{ backgroundColor: "#f25632" }}>
            Very Poor
          </div>
        );
      case 5:
        return (
          <div className="aqi-status" style={{ backgroundColor: "#ec35ac" }}>
            Hazardous
          </div>
        );
      default:
        return "No AQI status";
    }
  };
  const sunriseStamp = weatherData.sys.sunrise * 1000;
  var sunriseH = new Date(sunriseStamp).getHours();
  var sunriseM = new Date(sunriseStamp).getMinutes();
  const sunrise =
    (sunriseH < 10 ? "0" + sunriseH : sunriseH) +
    ":" +
    (sunriseM < 10 ? "0" + sunriseM : sunriseM);

  const sunsetStamp = weatherData.sys.sunset * 1000;
  var sunsetH = new Date(sunsetStamp).getHours();
  var sunsetM = new Date(sunsetStamp).getMinutes();
  const sunset =
    (sunsetH < 10 ? "0" + sunsetH : sunsetH) +
    ":" +
    (sunsetM < 10 ? "0" + sunsetM : sunsetM);

  // console.log('sunrise', sunrise)
  // console.log('sunset', sunset)
  // console.log(airComponents)

  return (
    <div className="highlights-container">
      <h2>Todays Highlights</h2>
      <div className="highlights-info-main">
        <div className="highlights-info-container">
          <div className="aqi-header">
            <h4>Air Quality Index</h4>
            {renderSwitch(airComponents.main.aqi)}
          </div>
          <div className="aqi-info">
            <MdAir size="4.5em" className="air_icon" />
            <div>
              <h5>PM2.5</h5>
              <h1>{airComponents.components.pm2_5}</h1>
            </div>
            <div>
              <h5>SO2</h5>
              <h1>{airComponents.components.so2}</h1>
            </div>
            <div>
              <h5>NO2</h5>
              <h1>{airComponents.components.no2}</h1>
            </div>
            <div>
              <h5>O3</h5>
              <h1>{airComponents.components.o3}</h1>
            </div>
          </div>
        </div>

        <div className="highlights-info-container">
          <div className="aqi-header">
            <h4>Sunrise & Sunset</h4>
          </div>

          <div className="suntime-info-container">
            <MdSunny size="4.5em" color="#ffd11df0" />
            <div className="suntime-info-item">
              <h5>Sunrise</h5>
              <h1>{sunrise}</h1>
            </div>
            <MdNightsStay size="4.5em" color="#2958b0" />
            <div className="suntime-info-item">
              <h5>Sunset</h5>
              <h1>{sunset}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="highlights-info-small">
        <div className="highlights-info-small-container">
          <h4>Humidity</h4>
          <div>
            <MdOutlineWaterDrop size="4em" color="#1f64b5" />
            <h1>
              {weatherData.main.humidity}
              <span>%</span>
            </h1>
          </div>
        </div>
        <div className="highlights-info-small-container">
          <h4>Pressure</h4>
          <div>
            <MdWaves size="4em" color="#595656" />
            <h1>
              {weatherData.main.pressure}
              <span>hPa</span>
            </h1>
          </div>
        </div>
        <div className="highlights-info-small-container">
          <h4>Visiblity</h4>
          <div>
            <MdOutlineVisibility size="4em" color="#595656" />
            <h1>
              {weatherData.visibility / 1000}
              <span>km</span>
            </h1>
          </div>
        </div>
        <div className="highlights-info-small-container">
          <h4>Feels like</h4>
          <div>
            <MdOutlineThermostat size="4em" color="#00949b" />
            <h1>{Math.round(weatherData.main.feels_like)}&deg;C</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHighlights;
