import React from 'react'

const Filter = ({ filteredCountry, handleFilterChange }) => {
  return (
    <div>
      find countries{' '}
      <input value={filteredCountry} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter
