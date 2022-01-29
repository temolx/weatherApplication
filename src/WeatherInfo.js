import React from 'react'

function WeatherInfo({ weatherData, setWeatherData, isLoading, setIsLoading }) {

    return (
        <div className="countryInfo">
            {isLoading? <h2></h2> : <h3 className="countryName">{ weatherData.name + ", " + weatherData.sys.country }</h3>}
            {isLoading? <h2></h2> : <h4 className="countryTime">Saturday, 29 January 2022</h4>}
            {isLoading? <h2></h2> : <h1 className="countryWeather">{ weatherData.main.temp }</h1>}
            {isLoading? <h2></h2> : <h2 className="countryStatus">{ weatherData.weather[0].main }</h2>}
        </div>
    )
}

export default WeatherInfo
