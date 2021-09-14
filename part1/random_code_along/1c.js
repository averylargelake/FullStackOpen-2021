const Hello = (props) => {
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - props.age
    }
  
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
/* Equivalent
const bornYear = () => new Date().getFullYear() - age

const bornYear = () => {
  return new Date().getFullYear() - age
}
*/

/* Event handlers
const handleClick = () => {
    console.log('clicked')
  }

<button onClick={() => setCounter(counter + 1)}> 
  plus
</button>
*/

/*deconstruction
const Hello = (props) => {
  const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age

  const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
*/

/*react hooks
import React, { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

    setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}
*/