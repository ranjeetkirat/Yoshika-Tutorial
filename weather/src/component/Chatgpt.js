import React, { useState } from 'react';

function Chatgpt() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const apiKey = '6f5b2838a6c87016847e6a189e75d53e'; // Store your API key here

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleClick = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => setWeather(data))
            .catch((error) => console.error('Error fetching weather data:', error));
    };

    return (
        <>
            <div className="grid grid-cols-5 bg-sky-200">
                <div></div>
                <div className="col-span-3 bg-sky-300 pt-10 m-20 p-10 rounded-md">
                    <input
                        type="text"
                        className="border-2 border-black w-full h-12 rounded-md text-xl font-medium pl-2 bg-sky-100"
                        value={city}
                        onChange={handleCityChange}
                        placeholder="Enter City Name"
                    />
                    <button
                        className="p-2 bg-sky-100 text-xl w-40 h-12 mt-5 ring-1 ring-black rounded-md"
                        onClick={handleClick}
                    >
                        Get Weather
                    </button>
                    {weather && (
                        <div className="mt-5 text-lg">
                            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
                            <p>Weather: {weather.weather[0].description}</p>
                            <p>Humidity: {weather.main.humidity}%</p>
                            <p>Wind Speed: {weather.wind.speed} m/s</p>
                        </div>
                    )}
                </div>
                <div></div>
            </div>
        </>
    );
}

export default Chatgpt;
