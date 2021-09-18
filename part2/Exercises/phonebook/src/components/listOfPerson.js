import React from 'react'
import Person from './Person'


const ListOfPersons = (props) => {
    return (
        <ul>
            {props.persons.filter(person => person.name.toUpperCase().includes(props.filter.toUpperCase())).map(person => 
            <Person key={person.id} name={person.name} number={person.number} removePerson={() => props.removePerson(person.id)} />
            )}
        </ul>
    )
}

export default ListOfPersons
        