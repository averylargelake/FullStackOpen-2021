import React, { useState, useEffect } from 'react'
import ListOfPersons from './components/listOfPerson';
import Filter from './components/filter'
import AddPerson from  './components/AddPerson'
import numService from './services/numberDB'
import Notification from  './components/Notification'




const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState('')

  useEffect(() => {
    numService
      .getAll()
      .then(initNumbers => {
        setPersons(initNumbers)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.filter(person => person.name === personObject.name).length > 0) {
      window.confirm(`${newName} is already added to phonebook, add new number for person?`); {
        const personToUpdate = persons.find(p => p.name === newName)
        console.log({personToUpdate});
        const changedPerson = { ...personToUpdate, number: newNumber }
        console.log({changedPerson});

        numService
        .update(changedPerson.id, changedPerson)
        .then(newPerson => {
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : newPerson))
          setNewName('')
          setNewNumber('')
          setStatusType('success')
          setStatusMessage(
            `${changedPerson.name}'s number was succesfully updated`
          )
          setTimeout(() => {
            setStatusMessage(null)
          }, 5000)

        })
      }
    } else {
      numService
      .create(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        setStatusType('success')
        setStatusMessage(
          `${personObject.name}'s information was successfully added`
        )
        setTimeout(() => {
          setStatusMessage(null)
        }, 5000)
      })
    }
  }

  const RemovePerson = id => {
    const person = persons.find(p => p.id === id)


    if (window.confirm (`Do you really want to remove person ${person.name}`)) {
      numService
      .remove(id)
      .then(removePerson => {
        setPersons(persons.filter(n => n.id !== id))
        setStatusType('success')
        setStatusMessage(
          `${person.name}'s information was successfully removed`
        )
      })
      .catch(error => {
        setStatusType('error')
        setStatusMessage(
          `${person.name}'s information has been already removed from server`
        )
        setTimeout(() => {
          setStatusMessage(null)
        }, 5000)
        setPersons(persons.filter(n => n.id !== id))
      })
    }
  }
  
  console.log(statusType);
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={statusMessage} type={statusType} />
      <AddPerson newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} add={addPerson} />
      <h2>Numbers</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ListOfPersons persons={persons} filter={filter} removePerson={RemovePerson} />
    </div>
  )
 
}

export default App
