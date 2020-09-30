import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(6).fill(0))

  const handleNextClick = () => {
    setSelected(randomNum(0, anecdotes.length - 1))
  }

  const randomNum = (minNum, maxNum) => {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] +=1
    console.log(newVotes)
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecodote of the day</h1>
      <p>
        {props.anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>
      <Button onClick={handleVote} text='vote' />
      <Button onClick={handleNextClick} text='next anecode' />
      <h1>Anecdote with most votes</h1>
      <p>
        {props.anecdotes[votes.indexOf(Math.max(...votes))]}
      </p>
      <p>
        has {Math.max(...votes)} votes
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)