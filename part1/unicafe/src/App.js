import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const StatLine = ({ text, statistics }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{statistics}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  let average = (good - bad) / total

  if (good || neutral || bad) {
    return (
      <table>
        <tbody>
          <StatLine text="good" statistics={good} />
          <StatLine text="neutral" statistics={neutral} />
          <StatLine text="bad" statistics={bad} />
          <StatLine text="all" statistics={total} />
          <StatLine text="average" statistics={average} />
          <StatLine text="positive" statistics={(good / total) * 100} />
        </tbody>
      </table>
    )
  } else {
    return (
      <div>
        <h2>No feedback given</h2>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
