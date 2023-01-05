import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: Math.PI / 6,
    label: 'π/6',
  },
  {
    value: Math.PI / 3,
    label: 'π/3',
  },
  {
    value: Math.PI / 2,
    label: 'π/2',
  },
  {
    value: (2 * Math.PI) / 3,
    label: '2π/3',
  },
  {
    value: (5 * Math.PI) / 6,
    label: '5π/6',
  },
  {
    value: Math.PI,
    label: 'π',
  },
  {
    value: (7 * Math.PI) / 6,
    label: '7π/6',
  },
  {
    value: (4 * Math.PI) / 3,
    label: '4π/3',
  },
  {
    value: (3 * Math.PI) / 2,
    label: '3π/2',
  },
  {
    value: (5 * Math.PI) / 3,
    label: '5π/3',
  },
  {
    value: (11 * Math.PI) / 6,
    label: '11π/6',
  },
  {
    value: 2 * Math.PI,
    label: '2π',
  },
]

const ThetaSlider = ({ theta, updateSlider, colour }) => {
  const PrettoSlider = styled(Slider)({
    color: `${colour}`,
    height: 12,
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-markLabel': {
      fontSize: 16,
      color: '#f7faf8',
    },
  })
  return (
    <>
      <h3>Theta (θ)</h3>
      <Box width={500}>
        <PrettoSlider
          aria-label='Theta (θ)'
          value={theta}
          onChange={updateSlider}
          step={Math.PI / 6}
          marks={marks}
          min={0}
          max={2 * Math.PI}
        />
      </Box>
    </>
  )
}

export default ThetaSlider
