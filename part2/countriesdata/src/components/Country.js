import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({
  country: { name, capital, population, languages, flag },
}) => {
  const [showCountryDetails, setShowCountryDetails] = useState(false)
  const [weather, setWeather] = useState({})

  const weatherAPIKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${weatherAPIKey}&query=${capital}`
      )
      .then(response => setWeather(response.data))
  }, [])

  return (
    <div>
      <p>
        {name}{' '}
        <button onClick={() => setShowCountryDetails(!showCountryDetails)}>
          {showCountryDetails ? 'hide' : 'show'}
        </button>
      </p>
      {showCountryDetails && (
        <div>
          <h1>{name}</h1>
          <p>
            capital: {capital} <br /> population: {population}
          </p>
          <h3>Languages</h3>
          <ul>
            {languages.map(language => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <img width={200} src={flag} alt="country flag" />
          <h3>Weather in {name}</h3>
          <p>
            <b>temperature</b> {weather.current.temperature} Celsius
            <br />
            <img src={weather.current.weather_icons[0]} alt="Weather icon" />
            <br />
            <b>wind speed</b>: {weather.current.weather_speed} km/h, direction{' '}
            {weather.current.wind_dir}
          </p>
        </div>
      )}
    </div>
  )
}

export default Country
