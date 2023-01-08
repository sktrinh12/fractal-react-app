import GtagTriangle from './GtagTriangle'
import Triangle from './Triangle'
const FractalTriangle = ({ count, colour }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='100%'
      viewBox='0 20 500 400'
    >
      <defs>
        <>
          <Triangle id='lev0' colour={colour} />
          {Array.from(Array(count)).map((_, i) => {
            return <GtagTriangle key={`tri_${i}`} i={i} />
          })}
        </>
      </defs>
      <use xlinkHref={`#lev${count}`} transform='translate(50,50) scale(200)' />
    </svg>
  )
}

export default FractalTriangle
