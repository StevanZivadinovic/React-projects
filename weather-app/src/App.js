import React, { useState, useEffect } from "react";
import "./App.css";

import firebase from "./config/config.js";

const api = {
  key: "bb75ef88e0fef7fd55e01fcb844d0bf3",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  let db = firebase.firestore();

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [oblacnost2, setOblacnost2] = useState("");
  const [grad, setGrad] = useState("");

  useEffect(() => {
   localStorage.setItem('vreme',weather);
  }, [weather]);

  console.log(weather);


  useEffect(() => {
    if (localStorage.getItem("oblacnost")) {
      setOblacnost2(localStorage.getItem("oblacnost"));
    }
  }, []);

  //svaki naredni put
  useEffect(() => {
    localStorage.setItem("oblacnost", oblacnost2);
  }, [oblacnost2]);

  useEffect(() => {
    if (localStorage.getItem("grad")) {
      setGrad(localStorage.getItem("grad"));
    }
  },[]);

  //svaki naredni put
  useEffect(() => {
    localStorage.setItem("grad", grad);
  }, [grad]);

  let search = async (evt) => {
    if (evt.key === "Enter") {
      let response = await fetch(
        `${api.base}weather?q=${query}&appid=${api.key}`
      );
      let data = await response.json();
      setWeather(data);
      setQuery("");
      setOblacnost2(data.weather[0].main);
      setGrad(data.name);

      db.collection("kolekcija")
      .doc()
        .set({
          oblacnost: data.weather[0].main,
          grad: data.name,
        })
        .then(() => {
          console.log(`Grad je dodat: ${data.name}`)
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter a city.."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp) / 10}°c</div>
              
               <div className="weather">{weather.weather[0].main}</div>
              <div className="weather">Wind: {weather.wind.speed}m/s</div>
            </div>
          </div>
        ) : (
          <div className="weather-box">

            <div className="weather">{oblacnost2}</div>
            <div className="weather">{grad}</div>
          </div>

        )}
      </main>
    </div>
  );
}

export default App;
