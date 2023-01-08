import GtagTriangle from './GtagTriangle'
import Triangle from './Triangle'
const FractalTriangle = ({ count, colour, theta }) => {
  const deg = (theta * 180) / Math.PI
  const W = 1
  const L = 1
  const X = W * Math.cos(theta) + L * Math.sin(theta)
  const Y = -W * Math.sin(theta) + L * Math.cos(theta)
  console.log(`X: ${X}; Y: ${Y}; deg:${deg}`)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='100%'
      viewBox={`0 0 2 2`}
    >
      <defs>
        <>
          <Triangle id='lev0' colour={colour} />
          {Array.from(Array(count)).map((_, i) => {
            return <GtagTriangle key={`tri_${i}`} i={i} />
          })}
        </>
      </defs>
      <use xlinkHref={`#lev${count}`} transform={`rotate(${deg})`} />
    </svg>
  )
}

export default FractalTriangle
