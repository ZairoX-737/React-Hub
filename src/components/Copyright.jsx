import React from "react";

const Copyright = () => {
  return (
    <div className="copyright">
      <a href="https://github.com/ZairoX-737">
        <h4> &copy; Copyright 2024 ZairoX-737. All Rights Reserved</h4>
      </a>
      <a href="https://youtu.be/QMwyNnjAils?si=-cCAzU86yG2RRkOY">
        <h4>Designed By codewithsadee</h4>
      </a>
      <a href="https://openweathermap.org/">
        <div style={{ display: "flex", gap: "1em" }}>
          <h4>Powered By</h4>
          <img alt="OpenWeather-icon" src={`icons/OpenWeather.png`} />
        </div>
      </a>
    </div>
  );
};

export default Copyright;
