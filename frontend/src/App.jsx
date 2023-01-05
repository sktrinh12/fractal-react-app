import { useState } from 'react'
import './App.css'
import Path from './Path'
import ThetaSlider from './Slider'
import { BlockPicker } from 'react-color'

const paletteColours = [
  '#EA3221',
  '#EA8B21',
  '#EAEA21',
  '#21EA26',
  '#21EAE3',
  '#2199EA',
  '#2135EA',
  '#6021EA',
  '#E521EA',
  '#EA2168',
]

function App() {
  const startTheta = (7 * Math.PI) / 6
  const [count, setCount] = useState(0)
  const [theta, setTheta] = useState(startTheta)
  const [colour, setColour] = useState('#CA6F1E')
  const handleChangeColour = (colour) => {
    setColour(colour.hex)
  }
  const handleCountClick = () => {
    console.log(count)
    setCount(count + 1)
  }
  const updateSlider = (e, theta) => {
    setTheta(theta)
  }
  return (
    <>
      <div>
        <Path count={count} theta={theta} colour={colour} />
      </div>
      <h1>Fractal Tree</h1>
      <ThetaSlider theta={theta} updateSlider={updateSlider} colour={colour} />
      <BlockPicker
        color={colour}
        onChangeComplete={handleChangeColour}
        colors={paletteColours}
      />
      <div className='card'>
        <button onClick={handleCountClick}>count is {count}</button>
        <p>Click to increase the generation of branches</p>
      </div>
    </>
  )
}

export default App
