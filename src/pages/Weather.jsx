import React from "react";
import WeatherWidget from "../components/Weather_components/WeatherWidget";
import WeatherSearch from "../components/Weather_components/WeatherSearch";
import { useState } from "react";
import WeatherForecast from "../components/Weather_components/WeatherForecast";
import WeatherHighlights from "../components/Weather_components/WeatherHighlights";

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

const Weather = () => {
  const [search, setSearch] = useState();
  const [weatherData, setWeatherData] = useState(null);
  const [airData, setAirData] = useState(null);
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
    const AirFetch = fetch(
      `${api.base}air_pollution?lat=${latitude}&lon=${longitude}&APPID=${api.key}&units=metric`
    );
    Promise.all([WeatherFetch, ForecastFetch, AirFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      const AirResponse = await response[2].json();
      setWeatherData({ ...weatherResponse });
      setForecastData({ ...forecastResponse });
      setAirData({...AirResponse});
    })
    .catch((error) => console.log(error));
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
    const AirFetch = fetch(
      `${api.base}air_pollution?q=${search}&APPID=${api.key}&units=metric`
    );

    Promise.all([WeatherFetch, ForecastFetch, AirFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        const AirResponse = await response[2].json();
        setWeatherData({ city: search, ...weatherResponse });
        setForecastData({ city: search, ...forecastResponse });
        setAirData({ ...AirResponse });
      })
      .catch((error) => console.log(error));
  };

  // console.log(forecastData)
  // console.log(weatherData)
  // console.log(airData)

  return (
    <div className="weather-main-container">
      <div className="header">
        <h1>./Weather</h1>
      </div>
      <WeatherSearch
        handleSearch={handleSearch}
        setSearch={setSearch}
        handleCurrentLocation={handleCurrentLocation}
      />
      <div className="weather-widgets-container">
        <div>
          {weatherData && (
            <WeatherWidget weatherData={weatherData} date={date} />
          )}
          {forecastData && <WeatherForecast forecastData={forecastData} />}
        </div>

        {airData && (
          <div className="highlight">
            <WeatherHighlights airData={airData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
