import React from "react";
import WeatherWidget from "../components/Weather_components/WeatherWidget";
import WeatherSearch from "../components/Weather_components/WeatherSearch";
import { useState } from "react";
import WeatherForecast from "../components/Weather_components/WeatherForecast";
import WeatherHighlights from "../components/Weather_components/WeatherHighlights";
import { Spinner } from "../components/Loader";
import { trackPromise } from "react-promise-tracker";
import { areas } from "../constants/areas";
import { PuffLoader } from "react-spinners";
import WeatherTodayAt from "../components/Weather_components/WeatherTodayAt";
import Copyright from "../components/Copyright";
import { TypeAnimation } from "react-type-animation";

const api = {
  key: "417ff3f332927adcc72202170c06576e",
  base: "https://api.openweathermap.org/data/2.5/",
  geo: "https://api.openweathermap.org/geo/1.0/",
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
  const [isLoading, setIsLoading] = useState(false);

  const handleCurrentLocation = () => {
    // console.log('geolog-debug')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(LocationSuccess, LocationError);
    } else {
      setIsLoading(false);
      alert("Geolocation not supported");
    }
  };

  function LocationSuccess(position) {
    // console.log('geolog-success')
    setIsLoading(false);
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

    trackPromise(
      Promise.all([WeatherFetch, ForecastFetch, AirFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forecastResponse = await response[1].json();
          const AirResponse = await response[2].json();
          setWeatherData({ ...weatherResponse });
          setForecastData({ ...forecastResponse });
          setAirData({ ...AirResponse });
        })
        .catch((error) => console.log(error)),
      areas.weather
    );
  }

  function LocationError() {
    console.log("Unable to retrieve your location");
  }

  const handleSearch = () => {
    const GeoCodingFetch = fetch(
      `${api.geo}direct?q=${search}&limit=5&APPID=${api.key}`
    );
    trackPromise(
      Promise.all([GeoCodingFetch]).then(async (response) => {
        const GeoCodingFetch = await response[0].json();
        const longitude = GeoCodingFetch[0].lon;
        const latitude = GeoCodingFetch[0].lat;
        const AirFetch = fetch(
          `${api.base}air_pollution?&APPID=${api.key}&lat=${latitude}&lon=${longitude}&&units=metric`
        );
        Promise.all([AirFetch]).then(async (response) => {
          const AirResponse = await response[0].json();
          setAirData({ ...AirResponse });
        });
      }),
      areas.weather
    );

    const WeatherFetch = fetch(
      `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
    );
    const ForecastFetch = fetch(
      `${api.base}forecast?q=${search}&units=metric&APPID=${api.key}`
    );

    trackPromise(
      Promise.all([WeatherFetch, ForecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forecastResponse = await response[1].json();
          setWeatherData({ city: search, ...weatherResponse });
          setForecastData({ city: search, ...forecastResponse });
        })
        .catch((error) => console.log(error)),
      areas.weather
    );
  };

  // console.log(forecastData)
  // console.log(weatherData)
  // console.log(airData)

  return (
    <div className="weather-main-container">
      <div className="header">
        <TypeAnimation
          sequence={["./Hub/Weather"]}
          wrapper="h1"
          cursor={false}
          repeat={0}
          speed={25}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
        {isLoading ? <PuffLoader color="#36d7b7" size="45px" /> : ""}
        <Spinner area={areas.weather} />
      </div>
      <WeatherSearch
        handleSearch={handleSearch}
        setSearch={setSearch}
        handleCurrentLocation={handleCurrentLocation}
        setIsLoading={setIsLoading}
      />
      <div className="weather-widgets-container">
        <div>
          {weatherData && (
            <WeatherWidget weatherData={weatherData} date={date} />
          )}
          {forecastData && <WeatherForecast forecastData={forecastData} />}
        </div>

        {airData && forecastData && (
          <div className="highlight">
            <WeatherHighlights airData={airData} weatherData={weatherData} />
            <div className="todayat-media-standart">
              <WeatherTodayAt forecastData={forecastData} />
            </div>
          </div>
        )}
      </div>
      <div className="todayat-media-small">
        {forecastData && <WeatherTodayAt forecastData={forecastData} />}
      </div>
      {weatherData && <Copyright />}
    </div>
  );
};

export default Weather;
