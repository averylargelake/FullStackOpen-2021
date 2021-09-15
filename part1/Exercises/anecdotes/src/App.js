import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = (props) => {

  if (props.highCount === 0) {
    return (
    <div>
     <p>{props.anecdote[props.value]}</p>
     <p>{props.votes[props.value]}</p>
     <h3>Most voted anectode</h3>
    </div>
    )
  }
 
  return (
    <div>
     <p>{props.anecdote[props.value]}</p>
     <p>{props.votes[props.value]}</p>
     <h3>Most voted anectode</h3>
     <p>{props.anecdote[props.mostVoted]}</p>
    </div>
  ) 
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));
  const [mostVoted, setMostVoted] = useState(0);

  const highestVoteCount = Math.max.apply(Math, votes)
  const copy = { ...votes}

  const displayRand = () => {
      setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    
    copy[selected] += 1
    setVotes(copy)

    if (copy[selected] > copy[mostVoted]) {
      setMostVoted(selected);
    }
  }

  console.log(highestVoteCount)
  console.log(selected)
  console.log(votes)

  return (
    <div>
      <Button handleClick={displayRand} text='Anecdote'/>
      <Button handleClick={addVote} text='Vote'/>
      <Display anecdote={anecdotes} votes={votes} mostVoted={mostVoted} highCount= {highestVoteCount} value = {selected}/>
    </div>
  )
}

export default App