import React, { useState, useEffect } from 'react'
import "./style.css"
import Weather from './weather';



const Temp = () => {

    const [searchValue, setSearchValue] = useState("Varanasi");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3be4cd2fcb4deea77181d9b95b34bb74`

            const res = await fetch(url);
            const data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weatherType } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunrise, sunset } = data.sys;
            const WeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherType,
                name,
                speed,
                country,
                sunrise,
                sunset
            }
            setTempInfo(WeatherInfo);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])


    return <>
        <div className="wrap">
            <div className="search">
                <input
                    type="search"
                    placeholder="search..."
                    autoFocus
                    id="search"
                    className="searchTerm"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                />

                <button
                    className="searchButton"
                    type="button" onClick={getWeatherInfo}>
                    Search
                </button>
            </div>
        </div>
        <Weather tempInfo={tempInfo} />

    </>
}

export default Temp