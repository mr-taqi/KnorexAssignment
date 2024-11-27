import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { LocationSelect, WeatherCard, ForecastCard } from '../components';

const HomePage = () => {
    const { selectedLocation, weatherData, forecastData } = useAppContext();

    return (
        <div className="container">
            <div className="header">Weather Forecast</div>
            <LocationSelect />
            
            {/* Display current weather data */}
            {weatherData && (
                <WeatherCard weather={weatherData} />
            )}

            {/* Display weather forecast */}
            <div className="forecast">
                {forecastData && forecastData.map((forecast, index) => (
                    <ForecastCard key={index} forecast={forecast} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
