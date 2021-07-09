import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import DisplayCountries from './components/DisplayCountries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountry, setFilteredCountry] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleFilterChange = event => {
    setFilteredCountry(event.target.value)
  }

  return (
    <div>
      <Filter
        filteredCountry={filteredCountry}
        handleFilterChange={handleFilterChange}
      />
      <DisplayCountries filteredCountry={filteredCountry} countries={countries} />
    </div>
  )
}

export default App
