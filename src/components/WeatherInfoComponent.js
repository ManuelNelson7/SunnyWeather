import React from "react";
import {WeatherIcons} from "../pages/weather";
import '../styles/main.css'

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "./icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <div className='info-container'>
            <img class='info-icon' src={WeatherInfoIcons[name]}/>
            <span classname=''>
                {value}
                <span>{name}</span>
            </span>
        </div>
    );
};

const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <div className='info-container'>
                <span className='condition'>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </span>
                <img className='weather-icon' src={WeatherIcons[weather?.weather[0].icon]}/>
            </div>
            <span className='location'>{`${weather?.name}, ${weather?.sys?.country}`}</span>

            <h3 className='weather-info-label'>Weather Info</h3>
            <div className='weather-info-container'>
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </div>
        </>
    );
};

export default WeatherComponent;
