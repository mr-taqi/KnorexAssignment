import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (location, days = 3) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    try {
        const currentWeatherResponse = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: location,
                appid: apiKey,
                units: 'metric',
            },
        });

        const currentWeather = {
            city: currentWeatherResponse.data.name,
            temperature: currentWeatherResponse.data.main.temp,
            description: currentWeatherResponse.data.weather[0].description,
        };

        const forecastResponse = await axios.get(`${BASE_URL}/forecast/daily`, {
            params: {
                q: location,
                cnt: days,
                appid: apiKey,
                units: 'metric',
            },
        });

        const weatherForecast = forecastResponse.data.list.map((item) => ({
            date: new Date(item.dt * 1000).toLocaleDateString(),
            temperature: item.temp.day,
            description: item.weather[0].description,
        }));

        return { currentWeather, weatherForecast };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return { currentWeather: null, weatherForecast: [] };
    }
};
