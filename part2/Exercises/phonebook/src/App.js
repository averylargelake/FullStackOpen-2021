import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListOfPersons from './components/listOfPerson';
import Filter from './components/filter'
import AddPerson from  './components/AddPerson'




const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
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
      id: persons.length + 1
    }

    if (persons.filter(person => person.name === personObject.name).length > 0) {
      window.alert(`${newName} is already added to phonebook`);
      
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <AddPerson newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} add={addPerson} />
      <h2>Numbers</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ListOfPersons persons={persons} filter={filter} />
    </div>
  )
 
}

export default App
