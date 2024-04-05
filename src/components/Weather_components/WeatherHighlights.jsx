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

const WeatherHighlights = ({ airData }) => {
  return (
    <div className="highlights-container">
      <h2>Todays Highlights</h2>
      <div className="highlights-info-main">
        <div className="highlights-info-container">
          <div className="aqi-header">
            <h4>Air Quality Index</h4>
            <div>Good</div>
          </div>
          <div className="aqi-info">
            <MdAir size="4.5em" color="white" />
            <div>
              <h5>PM2.5</h5>
              <h1>250</h1>
            </div>
            <div>
              <h5>SO2</h5>
              <h1>4.53</h1>
            </div>
            <div>
              <h5>NO2</h5>
              <h1>41.5</h1>
            </div>
            <div>
              <h5>O3</h5>
              <h1>23.6</h1>
            </div>
          </div>
        </div>

        <div className="highlights-info-container">
          <div className="aqi-header">
            <h4>Sunrise & Sunset</h4>
          </div>

          <div className="suntime-info-container">
            <MdSunny size="4.5em" color="white" />
            <div className="suntime-info-item">
              <h5>Sunrise</h5>
              <h1>6:45 AM</h1>
            </div>
            <MdNightsStay size="4.5em" color="white" />
            <div className="suntime-info-item">
              <h5>Sunset</h5>
              <h1>6:21 PM</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="highlights-info-small">
        <div>
          <h4>Humidity</h4>
        </div>
        <div>
          <h4>Pressure</h4>
        </div>
        <div>
          <h4>Visiblity</h4>
        </div>
        <div>
          <h4>Feels like</h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherHighlights;
