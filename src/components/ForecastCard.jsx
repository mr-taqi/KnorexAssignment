import React from 'react';

const ForecastCard = ({ forecast }) => {
    return (
        <div className="forecast-card">
            <h4>{forecast.dt_txt}</h4>
            <p>Temperature: {forecast.main.temp}°C</p>
            <p>Weather: {forecast.weather[0].description}</p>
            <p>Humidity: {forecast.main.humidity}%</p>
        </div>
    );
};

export default ForecastCard;
