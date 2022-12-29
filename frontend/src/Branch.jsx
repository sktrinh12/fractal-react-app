import React from 'react'

const Branch = ({ x1, y1, x2, y2, strokeWidth, colour }) => {
  return (
    <svg>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={colour}
        fill={colour}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

export default Branch
