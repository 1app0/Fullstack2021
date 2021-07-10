import React from 'react'

const Person = ({ name, number, handleClick }) => {
  return (
    <div>
      <p>
        {name} {number} <button onClick={handleClick}>delete</button>
      </p>
    </div>
  )
}

export default Person
