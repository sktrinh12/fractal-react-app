const Triangle = ({ id, colour }) => {
  return <path key={id} id={id} fill={colour} d='M0 0,2 0,1 1.732 z' />
}

export default Triangle
