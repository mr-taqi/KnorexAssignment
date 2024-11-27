import React from 'react';
import { useAppContext } from '../context/AppContext';

const LocationSelect = () => {
    const { selectedLocation, setSelectedLocation } = useAppContext();

    const handleChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    return (
        <div className="dropdown">
            <select
                value={selectedLocation}
                onChange={handleChange}
                className="select"
            >
                <option value="Ho Chi Minh">Ho Chi Minh</option>
                <option value="Singapore">Singapore</option>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Athens">Athens</option>
            </select>
        </div>
    );
};

export default LocationSelect;
