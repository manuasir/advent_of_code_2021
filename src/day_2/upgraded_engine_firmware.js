
const Engine = require('./engine_firmware')
class EngineV2 extends Engine {
  constructor(x = 0, y = 0, aim = 0) {
    super(x,y)
    this.aim = aim
  }

  forward(position) {
    this.x += position
    this.y += this.aim * position
  }
  up(position) {
    this.aim -= position
  }
  down(position) {
    this.aim += position
  }

}

module.exports = EngineV2