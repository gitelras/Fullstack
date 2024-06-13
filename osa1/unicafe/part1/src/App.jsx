
import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad
  const averageFeedback = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback
  const positiveFeedbackPercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100

  if (totalFeedback === 0) {
    return <p>No feedback given</p>
  }
  
  return (
    <div>
      <h1>statistics</h1>
      <p>all {totalFeedback}</p>
      <p>average {averageFeedback.toFixed(2)}</p>
      <p>positive {positiveFeedbackPercentage.toFixed(2)} %</p>
    </div>
  )
}

const App = () => {
  const [bad, setBad] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)

  console.log("App komponentti mountattiin")

  const handleBadClick = () => {
    const previousBad = bad;
    setBad(previousBad + 1)
  }

  const handleGoodClick = () => {
    const previousGood = good;
    setGood(previousGood + 1)
  }

  const handleNeutralClick = () => {
    const previousNeutral = neutral;
    setNeutral(previousNeutral + 1)
  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}


export default App