class Vector {
  constructor(...components) {
    this.components = components
    // this.rightComponents = new Array(this.components.length).fill(0)
  }

  add({ components }) {
    const vector = new Vector(
      ...components.map(
        (component, index) => this.components[index] + component
      )
    )
    // const vector = new Vector(...this.components.map((component) => component))
    // vector['addition'] = components.map((component, index) => {
    //   return this.components[index] + component
    // })
    // vector['end'] = this.components.map(
    //   (component, index) => component + vector['addition'][index]
    // )
    // console.log(vector)
    return vector
  }

  subtract({ components }) {
    const vector = new Vector(
      ...components.map(
        (component, index) => this.components[index] - component
      )
    )
    // const vector = new Vector(...this.components.map((component) => component))
    // vector['difference'] = components.map((component, index) => {
    //   return this.components[index] - component
    // })
    // vector['end'] = this.components.map(
    //   (component, index) => component - vector['difference'][index]
    // )
    // console.log(vector)
    return vector
  }

  scaleBy(number) {
    return new Vector(...this.components.map((component) => component * number))
    // const rightComponent = this.rightComponents.map(
    //   (component) => component * number
    // )
    // leftComponent['rightComponents'] = rightComponent
    // return leftComponent
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

    // const leftPoints = [this.components]
    const dataPoints = [this.components]
    // const rightPoints = [this.rightComponents]

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
    const mat = multiplyMatrices(dataPoints, rotateMatrix)[0] // return [[m, n]]
    // const rMat = multiplyMatrices(rightPoints, rotateMatrix)[0]
    // const mat = new Vector(lMat[0], lMat[1])
    // mat['rightComponents'] = [rMat[0], rMat[1]]
    return new Vector(mat[0], mat[1])
  }
}

export default Vector
