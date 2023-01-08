import Branch from './Branch'
import Vector from './Vectors'

const Yorigin = 100
let strokeW = 7
const SWdecr = 0.92
const strokeArray = []
const vectorRoot = new Vector(0, Yorigin)
const vector = new Vector(0, 0)
const branchOrigin = new Branch(
  vectorRoot.components[0],
  vectorRoot.components[1],
  vector.components[0],
  vector.components[1]
)
let tree = [branchOrigin]
let secTree = [branchOrigin]

const Path = ({ count, theta, chgTheta, colour }) => {
  let i, prevTree, biVal
  const binaryCount = Math.pow(2, count) - 1
  if (!chgTheta) {
    biVal = 0
    const biNumArr = []
    for (i = 0; i < binaryCount; i++) {
      biVal += Math.pow(2, i)
      biNumArr.push(biVal)
      if (biNumArr.includes(i)) {
        strokeW *= SWdecr
      }
      if (!tree[i].finished) {
        tree.push(tree[i].branch(theta))
        tree.push(tree[i].branch(-theta))
        strokeArray.push(strokeW)
      }
      tree[i].finished = true
    }
  } else {
    // first time swapping trees
    secTree = [branchOrigin]
    if (count > 0) {
      for (i = 1; i <= binaryCount; i++) {
        prevTree = secTree[i - 1]
        secTree.push(prevTree.branch(theta))
        secTree.push(prevTree.branch(-theta))
      }
      tree = secTree
    }
  }
  console.log('tree')
  console.log(tree)
  console.log('secTree')
  console.log(secTree)
  // console.log(strokeArray)
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='100%'
      viewBox='-200 -200 400 300'
    >
      {(chgTheta ? secTree : tree).map((br, i) => {
        const path = br.path()
        const x1 = path[0]
        const y1 = path[1]
        const x2 = path[2]
        const y2 = path[3]
        const id = `path${i}`
        return (
          <path
            key={id}
            id={id}
            fill='none'
            stroke={colour}
            strokeWidth={strokeArray[i] ?? strokeW}
            d={
              i === 0 ? `M ${x1} ${y1} v -${y1}` : `m ${x1} ${y1} L ${x2} ${y2}`
            }
          />
        )
      })}
    </svg>
  )
}

export default Path
