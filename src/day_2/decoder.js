
class Decoder {

  decode(instruction) {
    try {
      switch (instruction.split(" ")[0]) {
        case "up":
          return { direction: 1, inc: Number(instruction.split(" ")[1]) }
        case "down":
          return { direction: 2, inc: Number(instruction.split(" ")[1]) }
        case "forward":
          return { direction: 0, inc: Number(instruction.split(" ")[1]) }
      }
    } catch (error) {
      throw new Error(error.message || error)
    }
  }

}

module.exports = Decoder