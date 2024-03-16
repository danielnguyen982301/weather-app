import React from "react";

function WeatherCard({ weatherData }) {
  const date = new Date();
  return (
    <div className="card-container">
      <div className="date">{date.toLocaleString()} </div>
      <div className="location">
        {weatherData.name}, {weatherData.sys.country}
      </div>
      <div className="main-info">
        <div className="general-info">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].main}
          ></img>
          <span className="temp">
            {weatherData.main.temp}
            <sup>o</sup>C{" "}
          </span>
        </div>
        <span className="observed-info">
          Feels like {weatherData.main["feels_like"]}
          <sup>o</sup>C.{" "}
          {weatherData.weather[0].description.charAt(0).toUpperCase() +
            weatherData.weather[0].description.substring(
              1,
              weatherData.weather[0].description.length
            )}
        </span>
      </div>

      <div className="other-info">
        <div>Wind Speed: {weatherData.wind.speed} m/s</div>
        <div>Pressure: {weatherData.main.pressure} hPa</div>
        <div>Humidity: {weatherData.main.humidity} %</div>
        <div>
          Visibility:{" "}
          {weatherData.visibility >= 1000
            ? `${weatherData.visibility / 1000} km`
            : `${weatherData.visibility} m`}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
