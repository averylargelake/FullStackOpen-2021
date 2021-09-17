import React from 'react'
import Weather from './Weather'

const Country = ({country}) => {
  
    return (
        <div>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>Languages</h3>
        <ul>
          {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
        </ul>
        <img src={country.flag} alt="Country flag"
          height="250" width="350" />
          <Weather country={country} />
       </div>
      )
    }
            /*
            
            */
    
/*
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
*/


export default Country