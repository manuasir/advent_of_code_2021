class CPU {
  constructor(decoder) {
    this.decoder = decoder
  }

  exec(program) {
    return program.map(item => {
      return this.decoder.decode(item)
    })
  }

}
module.exports = CPU