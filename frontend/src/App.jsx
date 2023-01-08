import { useState } from 'react'
import ColourPicker from './ColourPicker'
import './App.css'
import Path from './Path'
import ThetaSlider from './Slider'
import FractalTriangle from './FractalTriangle'

function App({ slider }) {
  const startTheta = (7 * Math.PI) / 6
  const [count, setCount] = useState(0)
  const [colour, setColour] = useState('#30B05D') // greenish
  const [displayColourPicker, setDisplayColour] = useState(false)
  const [theta, setTheta] = useState(startTheta)

  const handleCountClick = () => {
    console.log(count)
    setCount(count + 1)
  }
  const handleResetCount = () => {
    setCount(0)
  }
  const updateSlider = (e, theta) => {
    setTheta(theta)
  }
  return (
    <>
      {' '}
      {slider && <Path count={count} theta={theta} colour={colour} />}
      {!slider && <FractalTriangle count={count} colour={colour} />}
      <h1>Fractal {slider ? 'Tree' : 'Triangle'}</h1>
      {slider && (
        <ThetaSlider
          theta={theta}
          updateSlider={updateSlider}
          colour={colour}
        />
      )}
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
