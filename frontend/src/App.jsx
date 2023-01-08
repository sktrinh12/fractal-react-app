import { useState } from 'react'
import ColourPicker from './ColourPicker'
import './App.css'
import Path from './Path'
import ThetaSlider from './Slider'

function App() {
  const startTheta = (7 * Math.PI) / 6
  const [count, setCount] = useState(0)
  const [theta, setTheta] = useState(startTheta)
  const [colour, setColour] = useState('#30B05D') // greenish
  const [displayColourPicker, setDisplayColour] = useState(false)
  const handleCountClick = () => {
    console.log(count)
    setCount(count + 1)
  }
  const updateSlider = (e, theta) => {
    setTheta(theta)
  }
  const handleResetCount = () => {
    setCount(0)
  }
  return (
    <>
      {' '}
      <Path count={count} theta={theta} colour={colour} />
      <h1>Fractal Tree</h1>
      <ThetaSlider theta={theta} updateSlider={updateSlider} colour={colour} />
      <ColourPicker
        colour={colour}
        setColour={setColour}
        displayColourPicker={displayColourPicker}
        setDisplayColour={setDisplayColour}
      />
      <div className='card'>
        <button className='btn' onClick={handleCountClick}>
          count is {count}
        </button>
        <button className='btn' onClick={handleResetCount}>
          Reset
        </button>
        <p>Click to increase the generation of branches</p>
      </div>
    </>
  )
}

export default App
