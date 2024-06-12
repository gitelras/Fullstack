import { useState } from 'react'

const Matcha = (props) => {
  const [value, setValue] = useState(10)

  const handleClick = () => {
    console.log('clicked the button')
    setValue(value * value)
  }

  return (
    <div>
      looooooool
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  )
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  console.log("App komponentti mountattiin")

  const handleLeftClick = () => {
    setAll(allClicks.concat('LOL'))
    const previousLeft = left;
    setLeft(previousLeft + 1)
    setTotal(previousLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const previousRight = right;
    setRight(previousRight + 1)
    setTotal(previousRight + left)
  }

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )

  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
        <p>total {total}</p>
        <History allClicks={allClicks} />
        <Matcha/>
      </div>
    </div>
  )
}


export default App