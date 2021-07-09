import React from 'react'
import Country from './Country'

const DisplayCountries = ({ filteredCountry, countries }) => {
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filteredCountry.toLowerCase())
  )

  const displayedCountries = filteredCountries.map(country => (
    <Country key={country.name} country={country} />
  ))

  if (displayedCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  return <div>{displayedCountries}</div>
}

export default DisplayCountries
