import { useState } from 'react'
import './App.css'
import Vector from './Vectors'
import Path from './Path'

function App() {
  const [count, setCount] = useState(0)
  // const [colour, setColour] = useState('#CA6F1E')
  const Y = 100
  const theta = (Math.PI * 5) / 4
  const vectorRoot = new Vector(0, Y)
  const [vector, setVector] = useState(new Vector(0, 0))
  const [tree, setTree] = useState([vectorRoot.subtract(vector)])
  const origin = `M 0 ${Y} v -${Y}`
  const handleCountClick = () => {
    setCount(count + 1)
    const distance = tree[count].subtract(vector)
    const rotateLeftVector = new Vector(
      Math.cos(-theta),
      -Math.sin(-theta),
      Math.sin(-theta),
      Math.cos(-theta)
    )

    const rotateRightVector = new Vector(
      Math.cos(theta),
      -Math.sin(theta),
      Math.sin(theta),
      Math.cos(theta)
    )

    const rightEnd = distance
      .multiply(rotateRightVector) // rotate
      .scaleBy(2 / 3)
      .add(vector)
    const newEnd = distance
      .multiply(rotateLeftVector)
      .scaleBy(2 / 3)
      .add(vector)
    newEnd['rightComponents'] = rightEnd.components
    setVector(newEnd)
    setTree([...tree, vector])
    // console.log(tree)
  }

  return (
    <>
      <div>
        <Path path={origin} tree={tree} />
      </div>
      <h1>Fractal Tree</h1>
      <div className='card'>
        <button onClick={handleCountClick}>count is {count}</button>
        <p>Click to increase the generation of branches</p>
      </div>
    </>
  )
}

export default App
