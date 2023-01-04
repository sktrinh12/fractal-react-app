import { useState } from 'react'
import './App.css'
import Path from './Path'
import Slider from './Slider'

function App() {
  const [count, setCount] = useState(0)
  // const [colour, setColour] = useState('#CA6F1E')

  const handleCountClick = () => {
    console.log(count)
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <Path count={count} />
      </div>
      <h1>Fractal Tree</h1>
      <Slider />
      <div className='card'>
        <button onClick={handleCountClick}>count is {count}</button>
        <p>Click to increase the generation of branches</p>
      </div>
    </>
  )
}

export default App
