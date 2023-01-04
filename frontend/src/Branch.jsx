import Vector from './Vectors'

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
    const newEnd = vectorEnd.add(direction)
    const branch = new Branch(
      this.endx,
      this.endy,
      newEnd.components[0],
      newEnd.components[1]
    )
    return branch
  }
}

export default Branch
