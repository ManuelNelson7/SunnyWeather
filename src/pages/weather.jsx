import React, { useState } from "react";
import Axios from "axios";
import CityComponent from "../components/CityComponent";
import WeatherComponent from "../components/WeatherInfoComponent";

export const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
};

const Weather = () => {
    const [cityName, updateCity] = useState();
    const [weather, updateWeather] = useState();
    const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await Axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0a0b60891c9b19e7b29433fbe7ac5008&lang=sp `
        );
        updateWeather(response.data);
    }


    return (
        <div>

            {cityName && weather ? (
                <WeatherComponent weather={weather} city={cityName} />
            ) : (
                <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
            )}
        </div >
    )
}

export default Weather