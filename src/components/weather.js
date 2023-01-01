import React, { useState, useEffect } from 'react'

const Weather = ({ tempInfo }) => {
    const [weatherMood, setWeatherMood] = useState("");

    const {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunrise,
        sunset
    } = tempInfo;

    useEffect(() => {
        if (weatherType) {
            switch (weatherType) {
                case "Clouds":
                    setWeatherMood("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherMood("wi-fog");
                    break;
                case "Clear":
                    setWeatherMood("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherMood("wi-dust");
                    break;
                default:
                    setWeatherMood("wi-day-sunny");
                    break;
            }
        }

    }, [weatherType])


    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

    return <>
        <article className="widget">
            <div className="weatherIcon">
                <i className={`wi ${weatherMood}`}></i>
            </div>

            <div className="weatherInfo">
                <div className="temperature">
                    <span>{temp}&deg;</span>
                </div>

                <div className="description">
                    <div className="weatherCondition">{weatherType}</div>
                    <div className="place">
                        {name},{country}
                    </div>
                </div>
            </div>

            <div className="date"> {new Date().toLocaleString()} </div>

            {/* our 4column section  */}
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {timeStr}PM <br />
                            Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            <br />
                            {humidity} Humidity
                        </p>
                    </div>
                </div>

                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-rain"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            <br />
                            {pressure} Pressure
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            <br />
                            {speed} Speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </>
}

export default Weather