class Vector {
  constructor(...components) {
    this.components = components
  }

  add({ components }) {
    //console.log(`this: ${this.components}`)
    //console.log(`$cmpt: ${components}`)
    const vector = new Vector(
      ...components.map((component, index) => {
        // console.log(`this: ${this.components[index]}, compt: ${component}`)
        return this.components[index] + component
      })
    )

    return vector
  }

  subtract({ components }) {
    const vector = new Vector(
      ...components.map(
        (component, index) => this.components[index] - component
      )
    )
    return vector
  }

  scaleBy(number) {
    const vector = new Vector(
      ...this.components.map((component) => component * number)
    )
    return vector
  }

  //   multiply({ components }) {
  //     const toMatrix = (arr, width) =>
  //       arr.reduce(
  //         (rows, key, index) =>
  //           (index % width == 0
  //             ? rows.push([key])
  //             : rows[rows.length - 1].push(key)) && rows,
  //         []
  //       )

  //     const dataPoints = [this.components]

  //     const rotateMatrix = toMatrix(components, 2) // a 2x2 matrix to rotate

  //     function multiplyMatrices(m1, m2) {
  //       var result = []
  //       for (var i = 0; i < m1.length; i++) {
  //         result[i] = []
  //         for (var j = 0; j < m2[0].length; j++) {
  //           var sum = 0
  //           for (var k = 0; k < m1[0].length; k++) {
  //             sum += m1[i][k] * m2[k][j]
  //           }
  //           result[i][j] = sum
  //         }
  //       }
  //       return result
  //     }
  //     const mat = multiplyMatrices(dataPoints, rotateMatrix)[0] // return [[m, n]]
  //     console.log(mat)
  //     const vector = new Vector(mat[1], mat[0])
  //     return vector
  //   }

  multiply({ components }) {
    const toMatrix = (arr, width) =>
      arr.reduce(
        (rows, key, index) =>
          (index % width == 0
            ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows,
        []
      )

    const A = toMatrix(this.components, 2)

    const B = toMatrix(components, 2)

    let x = A.length,
      z = A[0].length,
      y = B[0].length
    let productRow = Array.apply(null, new Array(y)).map(
      Number.prototype.valueOf,
      0
    )
    let product = new Array(x)
    for (let p = 0; p < x; p++) {
      product[p] = productRow.slice()
    }
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        for (let k = 0; k < z; k++) {
          product[i][j] += A[i][k] * B[k][j]
        }
      }
    }
    //console.log(product)
    return new Vector(product[0][0], product[0][1])
  }
}

function Branch(beginx, beginy, endx, endy) {
  this.beginx = beginx
  this.beginy = beginy
  this.endx = endx
  this.endy = endy
  this.finished = false

  this.path = function () {
    return [this.beginx, this.beginy, this.endx, this.endy]
  }

  this.branch = function (theta) {
    const rotateVector = new Vector(
      Math.cos(theta),
      -Math.sin(theta),
      Math.sin(theta),
      Math.cos(theta)
    )
    const vectorEnd = new Vector(this.endx, this.endy)
    const vectorBegin = new Vector(this.beginx, this.beginy)
    const direction = vectorBegin
      .subtract(vectorEnd)
      .multiply(rotateVector)
      .scaleBy(2 / 3)
    //console.log(direction)
    const newEnd = vectorEnd.add(direction)
    //console.log(`x: ${this.endx} y: ${this.endy}`)
    //console.log(newEnd)
    const branch = new Branch(
      this.endx,
      this.endy,
      newEnd.components[0],
      newEnd.components[1]
    )
    return branch
  }
}

const a = new Vector(0, 0)
const b = new Vector(0, 100)

console.log(a.subtract(b))

const branchOrigin = new Branch(
  b.components[0],
  b.components[1],
  a.components[0],
  a.components[1]
)

const number = 3
const tree = []
tree[0] = branchOrigin

for (j = 0; j < number; j++) {
  for (i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branch((Math.PI * 5) / 4))
      tree.push(tree[i].branch((-Math.PI * 5) / 4))
    }
    tree[i].finished = true
  }
}

console.log('=====tree=====')
console.log(`length: ${tree.length}`)
console.log(tree)
