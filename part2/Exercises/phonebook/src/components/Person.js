import React from 'react'

const Person = ({ name, number, removePerson }) => {
    return (
      <li className='person'>{name} {number} <button onClick={removePerson}>Delete</button></li>
    )
  }

  export default Person