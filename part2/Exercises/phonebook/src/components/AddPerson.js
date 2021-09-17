import React from 'react'

const AddPerson = (props) => {
    return (
        <form onSubmit={props.add}>
        <div>
          <p>Name  <input value={props.newName} onChange={props.handleNameChange} /></p>
          <p>Number  <input value={props.newNumber} onChange={props.handleNumberChange} /></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default AddPerson