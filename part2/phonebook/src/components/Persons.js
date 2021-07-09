import React from 'react'

const Persons = ({ persons, filteredName }) => {
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filteredName.toLowerCase())
  )

  return (
    <div>
      {personsToShow.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  )
}

export default Persons
