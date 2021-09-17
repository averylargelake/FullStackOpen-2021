import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/filter'
import DisplayCountries from './components/displayCountries'

const App = () => {
  
  const [filter, setFilter] = useState('')
  const [ allCountries, setAllCountries] = useState([])
  const [ filteredCountries, setFilteredCountries] = useState([])



  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setAllCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

      
      const listfilteredCountries = allCountries.filter(country => country.name.toUpperCase().includes(event.target.value.toUpperCase()))

      setFilteredCountries(listfilteredCountries)

  }


  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <DisplayCountries countries={filteredCountries} setFiltered={setFilteredCountries} />
    </div>
    
  )
}

export default App;
