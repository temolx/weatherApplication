import React, { useState, useEffect } from 'react'
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import clear from './img/clear.jpeg'
import cloudy from './img/cloudy.jpg'
import fog from './img/fog.jpg'
import rainy from './img/rainy.jpg'
import snow from './img/snow.jpg'

function FetchWeather({ userInput, setBackground, background }) {

    const[weatherData, setWeatherData] = useState({});
    const[isLoading, setIsLoading] = useState(true);
    const[backgroundChanged, setBackgroundChanged] = useState(false);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=4f4d526a1c9aa8e5ca8cfcb4914254e6`)
    
          .then((res) => {
            setWeatherData(res.data)
            setIsLoading(false)

            if (weatherData.weather[0].main === 'Clear') {
                setBackground(clear);
                setBackgroundChanged(!backgroundChanged);
            }
            else if (weatherData.weather[0].main === 'Clouds') {
                setBackground(cloudy);
                setBackgroundChanged(!backgroundChanged);
                console.log('easter egg lol');
            }
            else if (weatherData.weather[0].main === 'Fog') {
                setBackground(fog);
                setBackgroundChanged(!backgroundChanged);
            }
            else if (weatherData.weather[0].main === 'Rain' || weatherData.weather[0].main === 'Drizzle') {
                setBackground(rainy);
                setBackgroundChanged(!backgroundChanged);
            }
            else if (weatherData.weather[0].main === 'Snow') {
                setBackground(snow);
                setBackgroundChanged(!backgroundChanged);
            }
            // background change gets delayed by one step - probably cause it changes in App.js?

            console.log(res.data)
    
          }).then((err) => {
            console.log(err)
          })
          
      }, [userInput, isLoading, backgroundChanged])

    return (
        <div>
            <WeatherInfo weatherData={weatherData} setWeatherData={setWeatherData} isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
    )
}

export default FetchWeather
