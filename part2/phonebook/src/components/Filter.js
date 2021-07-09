import React from 'react'

const Filter = ({ filteredName, handleFilterChange }) => {
  return (
    <div>
      filter shown with:{' '}
      <input value={filteredName} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter
