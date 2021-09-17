import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({country}) => {
    const [we, setWeather] = useState()



        var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: `${country.capital}`,
            units: 'metric',
        },
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': '0f383c2070msh4991f54aee52126p16216bjsn5fad43897ef8'
        }
        };

        axios.request(options).then(response => {
            setWeather(response.data);
        }).catch(error => {
            console.error(error);
        });

        console.log({we});

        if (we === undefined) {
            return (
                <div>
                    <p>Loading</p>
                </div>
            )
            
        } else {

            return (
                <div>
                    <h3>Weather in capital: {country.capital}</h3>
                    <p>Temperature {we.main.temp} Celsius</p>
                    <p>{we.weather[0].description}</p>
                    <p>Wind {we.wind.speed} m/s {we.wind.deg} degrees</p>
                    
                </div>
            )
            
        }
    
}

export default Weather
        

