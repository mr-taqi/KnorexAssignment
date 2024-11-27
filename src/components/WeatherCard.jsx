import React from 'react';

const WeatherCard = ({ weather }) => {
    return (
        <div className="weather-card">
            <h3>{weather.name}, {weather.sys.country}</h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
        </div>
    );
};

export default WeatherCard;
