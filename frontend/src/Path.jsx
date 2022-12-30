import React from 'react'
// import Vector from './Vectors'

const Path = ({ path, tree }) => {
  console.log(tree)
  if (tree.length > 2) {
    // let mR
    // let mL
    path += ' L '
    const branches = tree.slice(2)
    // console.log(branches)
    branches.forEach((vector, i) => {
      const lVectors = vector.components
      const rVectors = vector.rightComponents
      // if (branches.length > 1) {
      //   mR = `m ${-rVectors[0]} ${-rVectors[1]}`
      //   mL = `m ${-lVectors[0]} ${-lVectors[1]}`
      // }
      path += ` ${rVectors[0]} ${rVectors[1]}  ${lVectors[0]} ${lVectors[1]}`
    })
  }

  console.log(path)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='100%'
      viewBox='-200 -500 400 600'
    >
      {tree.length > 1 && (
        <path
          id='path0'
          fill='none'
          stroke='#1ABC9C'
          strokeWidth='6'
          d={path}
        />
      )}
    </svg>
  )
}

export default Path
