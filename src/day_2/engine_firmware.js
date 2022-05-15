
class Engine {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  forward(position) {
    this.x += position
    return this.x
  }
  up(position) {
    this.y -= position
    return this.y
  }
  down(position) {
    this.y += position
    return this.y
  }
  getCurrentX() {
    return this.x
  }
  getCurrentY() {
    return this.y
  }
  sum() {
    return this.y * this.x
  }
  reset() {
    this.x = 0
    this.y = 0
  }
}

module.exports = Engine