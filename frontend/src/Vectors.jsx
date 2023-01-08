class Vector {
  constructor(...components) {
    this.components = components
  }

  add({ components }) {
    return new Vector(
      ...components.map(
        (component, index) => this.components[index] + component
      )
    )
  }

  subtract({ components }) {
    return new Vector(
      ...components.map(
        (component, index) => this.components[index] - component
      )
    )
  }

  scaleBy(number) {
    return new Vector(...this.components.map((component) => component * number))
  }

  #toMatrix = (arr, width) =>
    arr.reduce(
      (rows, key, index) =>
        (index % width == 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows,
      []
    )

  multiply({ components }) {
    const A = this.#toMatrix(this.components, 2)
    const B = this.#toMatrix(components, 2)

    let x = A.length, // number of elements in array
      z = A[0].length, // number of elements in first sub-array for both A/B
      y = B[0].length
    let productRow = Array.apply(null, new Array(y)).map(
      Number.prototype.valueOf,
      0
    ) // initiate a zero-filled array
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
    product = product.flat(2)
    return new Vector(product[0], product[1])
  }
}

export default Vector
