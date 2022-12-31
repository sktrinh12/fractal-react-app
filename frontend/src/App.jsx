import { useState } from 'react'
import './App.css'
import Vector from './Vectors'
import Path from './Path'

function App() {
  const [count, setCount] = useState(0)
  // const [colour, setColour] = useState('#CA6F1E')
  const Yorigin = 100
  const theta = (Math.PI * 5) / 4
  // const rotateLeftVector = new Vector(
  //   Math.cos(-theta),
  //   -Math.sin(-theta),
  //   Math.sin(-theta),
  //   Math.cos(-theta)
  // )
  const rotateRightVector = new Vector(
    Math.cos(theta),
    -Math.sin(theta),
    Math.sin(theta),
    Math.cos(theta)
  )
  const vectorRoot = new Vector(0, Yorigin)
  let vector = new Vector(0, 0)
  const [tree, setTree] = useState([vectorRoot])
  // const [X, setX] = useState(0)
  // const [Y, setY] = useState(0)
  const origin = `M 0 ${Yorigin} v -${Yorigin}`

  const handleCountClick = () => {
    // console.log(count)
    // const distance = tree[count].subtract(vector)
    // const distance = vector.subtract(tree[count])
    const begin = tree[count]
    // const rightEnd = begin
    //   .multiply(rotateRightVector) // rotate
    //   .scaleBy(2 / 3)

    // const newEnd = begin.multiply(rotateLeftVector).scaleBy(2 / 3)
    const newEnd = begin.multiply(rotateRightVector).scaleBy(2 / 3)

    // newEnd['rightComponents'] = rightEnd.components
    vector = newEnd

    // console.log('vector')
    // console.log(vector)
    // console.log('tree')
    // console.log(tree)
    setTree([...tree, vector])
    setCount(count + 1)
    // setX(X + Math.abs(tree[count].components[0]))
    // setY(Y + count !== 0 ? Math.abs(tree[count].components[1]) : 0)
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
