import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState(() => {
        return localStorage.getItem('selectedLocation') || 'Ho Chi Minh';
    });

    const locations = [
        'Ho Chi Minh',
        'Singapore',
        'Kuala Lumpur',
        'Tokyo',
        'Athens',
    ];

    const [forecastDays, setForecastDays] = useState(3);

    useEffect(() => {
        localStorage.setItem('selectedLocation', selectedLocation);
    }, [selectedLocation]);

    return (
        <AppContext.Provider
            value={{
                selectedLocation,
                setSelectedLocation,
                locations,
                forecastDays,
                setForecastDays,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
