import React from 'react'
import Country from  './Country'




const DisplayCountries = ({countries, setFiltered}) => {


    const length = countries.length

    if (length > 10 || length ===0) {

        return (
            <p>Too many countries to display</p>
        )

    } else if (length < 10 && length > 1) {

        return (
            <div>
                <ul>
                    {countries.map((country) =>
                        <li key={country.name}> {country.name} <button onClick={() => setFiltered([country])}>show</button></li>
                    )}
                </ul>
                
            </div>
        )
    } else { 
        
        return (
            <div>
                {countries.map(country => <Country key= {country.name} country={country}/>)}
            </div>
            
        )
    } 

}

export default DisplayCountries