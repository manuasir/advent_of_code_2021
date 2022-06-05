class Diagnostic {
  constructor(report) {
    this.report = report.map(item => item.split(""))
    this.gamma = ""
    this.epsilon = ""
  }

  getNumFiles() {
    return this.report.length
  }

  getNumCols() {
    return this.report[0].length
  }

  getCol(i) {
    return this.report.map(item => Number(item[i]))
  }

  gammaValue() {
    let gamma = ""
    for (let i = 0; i < this.getNumCols(); i++) {
      gamma += (this.getCol(i).filter(item => item === 1).length > this.getNumFiles() / 2) ? "1" : "0"
    }
    this.gamma = gamma
    return gamma
  }

  epsilonValue() {
    this.epsilon = this.gamma.split("").map(character => character === "1" ? "0" : "1").join("")
  }

  exec(){
    this.gammaValue()
    this.epsilonValue()
    return this.consumptionValue()
  }

  parseBinary(number) {
    console.log(number)
    return parseInt(number, 2)
  }

  consumptionValue() {
    return this.parseBinary(this.gamma) * this.parseBinary(this.epsilon)
  }

}
module.exports = Diagnostic