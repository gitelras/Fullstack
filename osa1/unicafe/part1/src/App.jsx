
import { useState } from 'react'


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
        
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  )
}


export default App