import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const gcd = function (a, b) {
  if (b < 0.0000001) return a // Since there is a limited precision we need to limit the value.

  return gcd(b, Math.floor(a % b)) // Discard any fractions due to limitations in precision.
}

function valuetext(value) {
  const radian = parseFloat(value) / Math.PI
  const len = radian.toString().length - 2
  const denominator = Math.pow(10, len)
  const numerator = radian * denominator
  const divisor = gcd(numerator, denominator)
  // console.log(`${divisor}`)
  return `${numerator}/${denominator}`
}

export default function SliderSizes() {
  return (
    <>
      <h3>Theta (θ)</h3>
      <Box width={500}>
        <Slider
          defaultValue={(5 * Math.PI) / 4}
          aria-label='Theta (θ)'
          getAriaValueText={valuetext}
          step={Math.PI / 6}
          marks
          min={0}
          max={2 * Math.PI}
        />
      </Box>
    </>
  )
}
