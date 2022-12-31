import React from 'react'

const Path = ({ path, tree }) => {
  console.log('tree')
  console.log(tree)
  // console.log(`X:${X}, Y:${Y}`)
  // if (tree.length > 1) {
  //   path += ' l '
  //   const branches = tree.slice(1)
  //   branches.forEach((vector, i) => {
  //     const lVectors = vector.components
  //     const rVectors = vector.rightComponents
  //     path += ` ${rVectors[0]} ${rVectors[1]}  ${lVectors[0]} ${lVectors[1]}`
  //     // path += ` ${lVectors[0]} ${lVectors[1]}`
  //     // path += ` ${rVectors[0]} ${rVectors[1]}`
  //   })
  // }

  if (tree.length > 1) {
    path += ' l'
    const branches = tree.slice(1)
    // console.log(branches)
    for (let j = 1; j <= branches.length; j++) {
      // const multi = 2 * j
      const lVec = branches[j - 1].components
      const rVec = branches[j - 1].rightComponents
      path += ` ${lVec[0]} ${lVec[1]} `
    }
  }
  console.log(path)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='100%'
      viewBox='-200 -500 400 600'
    >
      <path id='path0' fill='none' stroke='#1ABC9C' strokeWidth='6' d={path} />
    </svg>
  )
}

export default Path
