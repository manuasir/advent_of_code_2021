class Submarine {
  constructor(cpu, engine) {
    this.cpu = cpu
    this.engine = engine
  }

  run(program) {
    this.engine.reset()
    const engineInstructions = this.cpu.exec(program)
    engineInstructions.map(instruction => {
      switch (instruction.direction) {
        case 0:
          this.engine.forward(instruction.inc)
          break
        case 1:
          this.engine.up(instruction.inc)
          break
        case 2:
          this.engine.down(instruction.inc)
          break
      }
    })
  }

  getCurrentCoordinates() {
    return { x: this.engine.getCurrentX(), y: this.engine.getCurrentY() }
  }
  getCurrentSum() {
    return this.engine.sum()
  }
}

module.exports = Submarine