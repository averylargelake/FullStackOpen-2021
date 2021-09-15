import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  
  if (props.sum===0 ) {
    return (
      <tr>
        <td>No data</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.stats}</td>
    </tr>
  )

}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text='Good'/>
      <Button handleClick={increaseNeutral} text='Neutral'/>
      <Button handleClick={increaseBad} text='Bad'/>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistics name ='Good' sum = {good + bad +neutral} stats={good}/>
          <Statistics name = 'Neutral' sum = {good + bad +neutral} stats={neutral}/>
          <Statistics name = 'Bad' sum = {good + bad +neutral} stats={bad}/>
          <Statistics name = 'All' sum = {good + bad +neutral} stats={bad + good + neutral}/>
          <Statistics name = 'Average' sum = {good + bad +neutral} stats={(good - bad) / (bad + good + neutral) }/>
          <Statistics name = 'Positive' sum = {good + bad +neutral} stats={(good / (bad + good + neutral))* 100}/>
        </tbody>
      </table>
    </div>
  )
}

export default App