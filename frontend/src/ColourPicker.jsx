import { useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

const ColourPicker = ({
  colour,
  setColour,
  displayColourPicker,
  setDisplayColour,
}) => {
  const handleClick = () => {
    setDisplayColour(!displayColourPicker)
  }

  const handleClose = () => {
    setDisplayColour(false)
  }

  const handleChangeColour = (colour) => {
    setColour(colour.hex)
  }

  const styles = reactCSS({
    default: {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `${colour}`,
      },
      swatch: {
        padding: '6px',
        background: '#595959',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  })

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColourPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={colour} onChange={handleChangeColour} />
        </div>
      ) : null}
    </div>
  )
}

export default ColourPicker
