import React from 'react'

const calcOpp = (theta, hypot) => {
  return Math.sin(theta) * hypot
}

const calcAdj = (theta, hypot) => {
  return Math.cos(theta) * hypot
}

const generateDPath = (startingPath, theta, X, Y, moveUp, n, setPath) => {
  const path = setPath(`${startingPath} l ${calcAdj(
    theta,
    ((Y * 2 * n) / 3) * n
  )} ${calcOpp(theta, ((Y * 2 * n) / 3) * n)}
				m -${calcAdj(theta, ((Y * 2 * n) / 3) * n)} ${-calcOpp(
    theta,
    ((Y * 2 * n) / 3) * n
  )}
-${calcAdj(theta, ((Y * 2 * n) / 3) * n)} ${calcOpp(
    theta,
    ((Y * 2 * n) / 3) * n
  )}`)
  return path
}

const Path = ({ path }) => {
  const theta = 225
  const distance = 400
  const moveUp = 80
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 400 400'
    >
      <path
        id='path0'
        fill='none'
        stroke='#1ABC9C'
        strokeWidth='5'
        d={`M200 ${distance + moveUp}, v -${moveUp * 2}
						l ${calcAdj(theta, (moveUp * 2) / 3)} ${calcOpp(theta, (moveUp * 2) / 3)}
m -${calcAdj(theta, (moveUp * 2) / 3)} ${-calcOpp(theta, (moveUp * 2) / 3)}
						-${calcAdj(theta, (moveUp * 2) / 3)} ${calcOpp(theta, (moveUp * 2) / 3)}
																`}
      />
    </svg>
  )
}

export default Path
