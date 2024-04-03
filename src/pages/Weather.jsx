import React from "react";
import WeatherWidget from "../components/Weather_components/WeatherWidget";
import WeatherSearch from "../components/Weather_components/WeatherSearch";
import { useState } from "react";
import WeatherForecast from "../components/Weather_components/WeatherForecast";

const api = {
  key: "APIKEY",
  base: "https://api.openweathermap.org/data/2.5/",
};

var date_options = {
  weekday: "long",
  day: "numeric",
  year: "numeric",
};
var date = new Date().toLocaleDateString("en-US", date_options);

const Weather = () => {
  const [search, setSearch] = useState();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(LocationSuccess, LocationError);
    } else {
      alert("Geolocation not supported");
    }
  };

  function LocationSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const WeatherFetch = fetch(
      `${api.base}weather?lat=${latitude}&lon=${longitude}&APPID=${api.key}&units=metric`
    );
    const ForecastFetch = fetch(
      `${api.base}forecast?lat=${latitude}&lon=${longitude}&APPID=${api.key}&units=metric`
    );
    Promise.all([WeatherFetch, ForecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setWeatherData({ ...weatherResponse });
      setForecastData({ ...forecastResponse });
    });
  }

  function LocationError() {
    console.log("Unable to retrieve your location");
  }

  const handleSearch = () => {
    const WeatherFetch = fetch(
      `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
    );
    const ForecastFetch = fetch(
      `${api.base}forecast?q=${search}&units=metric&APPID=${api.key}`
    );

    Promise.all([WeatherFetch, ForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setWeatherData({ city: search, ...weatherResponse });
        setForecastData({ city: search, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };

  // console.log(forecastData)
  // console.log(weatherData)

  return (
    <div>
      <div className="header">
        <h1>./Weather</h1>
      </div>
      <WeatherSearch
        handleSearch={handleSearch}
        setSearch={setSearch}
        handleCurrentLocation={handleCurrentLocation}
      />
      {weatherData && <WeatherWidget weatherData={weatherData} date={date} />}
      {forecastData && <WeatherForecast forecastData={forecastData} />}
    </div>
  );
};

export default Weather;
