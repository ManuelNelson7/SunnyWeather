import React, { useState, useEffect } from "react";
import Axios from "axios";
import CityComponent from "../components/CityComponent";
import WeatherComponent from "../components/WeatherInfoComponent";
import axios from "axios";

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
    const API_key = 'a3f6e62ae7aa7e4377baff45fcf6ca8f'
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [weather, setWeather] = useState('')
    const [temperature, setTemperature] = useState(0)
    const [cityName, setCityName] = useState('')
    const [icon, setIcon] = useState('')


    const savePositionToState = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }

    const fetchWeather = async () => {
        try {
            window.navigator.geolocation.getCurrentPosition(savePositionToState);
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_key}&lang=es&units=metric`
            );
            setTemperature(res.data.current.temp)
            setWeather(res.data.current.weather[0].description)
            setIcon(res.data.current.weather[0].icon)
            console.log(res.data);
        } catch (err) {
            console.error(err)
        }
    }

    const fetchName = async () => {
        try {
            const res2 = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&lang=es&units=metric`
            );
            setCityName(res2.data.name)
            console.log(res2.data);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchWeather();
        fetchName();
    }, [latitude, longitude])

    
    return (
        <div className='body'>
            <div className="weather">
                <div className="container-weather">
                    <div className="location-name">
                        <i className="fas fa-map-marker-alt"></i>
                        <h4>{cityName}</h4>
                    </div>
                    <div className='div-img'>
                        <img src={WeatherIcons[icon]} alt={weather} />
                    </div>
                    <h1 className='temp'>{Math.floor(temperature)}<span>°</span></h1>
                    <h3>{weather}</h3>
                    <h5>Muy nuboso</h5>
                    <h5>Muy nuboso</h5>
                </div>
            </div>

            <div className="container-forecast">
                <p>Today</p>
            </div>
        </div>
    )
}

export default Weather