import React from 'react'
import Branch from './Branch'
import Vector from './Vectors'

const Yorigin = 100
const vectorRoot = new Vector(0, Yorigin)
const vector = new Vector(0, 0)
const branchOrigin = new Branch(
  vectorRoot.components[0],
  vectorRoot.components[1],
  vector.components[0],
  vector.components[1]
)
const tree = []
const theta = (-Math.PI * 5) / 4
tree[0] = branchOrigin

const Path = ({ count }) => {
  let j, i
  for (j = 0; j < count; j++) {
    for (i = tree.length - 1; i >= 0; i--) {
      if (!tree[i].finished) {
        tree.push(tree[i].branch(theta))
        tree.push(tree[i].branch(-theta))
      }
      tree[i].finished = true
    }
  }
  console.log(tree)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='100%'
      viewBox='-200 -500 400 600'
    >
      {tree &&
        tree.map((br, i) => {
          const path = br.path()
          const x1 = path[0]
          const y1 = path[1]
          const x2 = path[2]
          const y2 = path[3]
          return (
            <path
              key={`path${i}`}
              id={`path${i}`}
              fill='none'
              stroke='#1ABC9C'
              strokeWidth='3'
              d={
                i === 0
                  ? `M ${x1} ${y1} v -${y1}`
                  : `m ${x1} ${y1} L ${x2} ${y2}`
              }
            />
          )
        })}
    </svg>
  )
}

export default Path
