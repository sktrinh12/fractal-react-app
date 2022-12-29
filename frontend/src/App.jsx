import { useState } from 'react'
import './App.css'
// import Branch from './Branch'
import Path from './Path'

function App() {
  const [count, setCount] = useState(0)
  const [colour, setColour] = useState('#CA6F1E')
  const [path, setPath] = useState('M 100 200 v -100')

  return (
    <>
      <div>
        <Path path={path} />
      </div>
      <h1>Fractal Tree</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Click to increase the generation of branches</p>
      </div>
    </>
  )
}

export default App
