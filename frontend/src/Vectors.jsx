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
  multiply({ components }) {
    const toMatrix = (arr, width) =>
      arr.reduce(
        (rows, key, index) =>
          (index % width == 0
            ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows,
        []
      )

    const dataPoint = [this.components]
    const rotateMatrix = toMatrix(components, 2) // a 2x2 matrix to rotate

    function multiplyMatrices(m1, m2) {
      var result = []
      for (var i = 0; i < m1.length; i++) {
        result[i] = []
        for (var j = 0; j < m2[0].length; j++) {
          var sum = 0
          for (var k = 0; k < m1[0].length; k++) {
            sum += m1[i][k] * m2[k][j]
          }
          result[i][j] = sum
        }
      }
      return result
    }
    const mat = multiplyMatrices(dataPoint, rotateMatrix)[0] // return [[m, n]]
    return new Vector(mat[0], mat[1])
  }
}

export default Vector
