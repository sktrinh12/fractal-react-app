const GtagTriangle = ({ i }) => {
  const cnt = i + 1
  return (
    <g id={`lev${cnt}`}>
      <use xlinkHref={`#lev${i}`} transform='matrix(0.5 0 0 0.5  0  0)' />
      <use xlinkHref={`#lev${i}`} transform='matrix(0.5 0 0 0.5  1  0)' />
      <use xlinkHref={`#lev${i}`} transform='matrix(0.5 0 0 0.5 0.5 0.866)' />
    </g>
  )
}
export default GtagTriangle
