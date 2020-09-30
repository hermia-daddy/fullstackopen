import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td> {text}</td>
      <td> {value}</td>
    </tr>
  )
}

const Statistics = ({ goodCounter, neutralCounter, badCounter }) => {
  if (goodCounter > 0 || neutralCounter > 0 || badCounter > 0) {
    return (
      <table>
        <tbody>
          <Statistic text='good' value={goodCounter} />
          <Statistic text='neutral' value={neutralCounter} />
          <Statistic text='bad' value={badCounter} />
          <Statistic text='all' value={goodCounter + neutralCounter + badCounter} />
          <Statistic text='average' value={(goodCounter - badCounter) / (goodCounter + neutralCounter + badCounter)} />
          <Statistic text='positive' value={goodCounter / (goodCounter + neutralCounter + badCounter) * 100 + '%'} />
        </tbody>

      </table>
    )
  }

  return (
    <p>No feedback given</p>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedbak</h1>
      <Button handleClick={handleGoodClick} text={'good'} />
      <Button handleClick={handleNeutralClick} text={'neutral'} />
      <Button handleClick={handleBadClick} text={'bad'} />
      <h1>statistics</h1>
      <Statistics goodCounter={good} neutralCounter={neutral} badCounter={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))