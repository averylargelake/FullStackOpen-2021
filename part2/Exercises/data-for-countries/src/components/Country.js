import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
      const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: country.capital
      }
  
      axios.get('http://api.weatherstack.com/current', {params})
        .then(response => {
          const apiResponse = response.data;
          console.log(apiResponse)
          console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
          setWeather([apiResponse])
        }).catch(error => {
          console.log(error);
      })
    })
    console.log({weather});
  if (weather.length > 0) {
    const we = weather[0].current
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img src={country.flag} alt="Country flag" height="250" width="350" />
            <h3>Weather in capital: {we.capital}</h3>
            <p>Temperature: {we.temperature} Celsius</p>
            <img src={we.weather_icons[0]} alt="Weather icon"></img>
            <p>Wind: {we.wind_speed} direction {we.wind_dir} </p>
        </div>
    )
  }

  return (
    <div>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>Languages</h3>
        <ul>
          {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
        </ul>
        <img src={country.flag} alt="Country flag" height="250" width="350" />
    </div>
  )

  
}



export default Country