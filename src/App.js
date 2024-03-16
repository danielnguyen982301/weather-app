import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import loadingGif from "./assets/loading.gif";
import "./App.css";

const API = {
  KEY: "e198bb86452398174a8bc1d4430e805e",
  BASE: "https://api.openweathermap.org/data/2.5/weather?",
};

function App() {
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(input);
  };

  useEffect(() => {
    const getWeatherData = async () => {
      if (!searchInput) return;
      setLoading(true);
      try {
        const response = await fetch(
          `${API.BASE}appid=${API.KEY}&q=${searchInput}&units=metric`
        );
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setWeatherData(data);
          setErrorMessage("");
        } else {
          setErrorMessage(data.message);
        }
      } catch (err) {
        setErrorMessage(err.message);
      }
      setLoading(false);
    };

    getWeatherData();
  }, [searchInput]);

  return (
    <div className="container">
      <Header />
      <SearchForm
        handleChange={(e) => setInput(e.target.value)}
        handleSubmit={handleSubmit}
      />
      {loading ? (
        <div className="loading-gif">
          <img src={loadingGif} alt="Loading..." />
        </div>
      ) : errorMessage ? (
        <div className="error-message">{errorMessage.toUpperCase()}</div>
      ) : (
        weatherData && <WeatherCard weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
