import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import personService from './services'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    personService.getAllPersons().then(response => {
      setPersons(response.data)
    })
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    const person = persons.find(person => person.name === newName)
    if (person) {
      if (person.number !== newNumber) {
        if (
          window.confirm(`Do you wish to replace ${newName}'s phone number?`)
        ) {
          const changedPerson = { ...person, number: newNumber }
          personService
            .updatePersonNumber(changedPerson.id, changedPerson)
            .then(response => {
              const newArray = persons.map(person =>
                changedPerson.id !== person.id ? person : response.data
              )
              setPersons(newArray)
              setNotificationMessage(
                `${changedPerson.name}'s number was updated`
              )
              setTimeout(() => {
                setNotificationMessage(null)
              }, 5000)
              setNewName('')
              setNewNumber('')
            })
            .catch(error => {
              setErrorMessage(
                `${changedPerson.name}'s information has been already deleted form the phonebook`
              )
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            })
        }
      } else {
        window.alert(
          `${newName} is already registered in the phonebook with this phone number`
        )
        setNewName('')
        setNewNumber('')
      }
    } else {
      let newPerson = { name: newName, number: newNumber }
      personService.addPerson(newPerson).then(response => {
        setPersons(persons.concat(response.data))
        setNotificationMessage(`${newName} was added to the phonebook`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handleChangeName = event => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = event => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = event => {
    setFilteredName(event.target.value)
  }

  const handleDeletePerson = id => {
    if (window.confirm('Do you really want to delete this person?')) {
      personService.deletePerson(id).then(response => {
        const newArray = persons.filter(person => person.id !== id)
        setPersons(newArray)
        setNotificationMessage(`Person was deleted from the phonebook`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
    }
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filteredName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} error={false} />
      <Notification message={errorMessage} error={true} />
      <Filter
        filteredName={filteredName}
        handleFilterChange={handleFilterChange}
      />
      <PersonForm
        handleSubmit={handleSubmit}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        newName={newName}
        newNUmber={newNumber}
      />
      {personsToShow.map(person => (
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
          handleClick={() => handleDeletePerson(person.id)}
        />
      ))}
    </div>
  )
}

export default App
