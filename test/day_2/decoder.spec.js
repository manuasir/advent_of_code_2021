const Decoder = require('../../src/day_2/decoder')
const decoder = new Decoder()
describe('Day 2', () => {
  describe('Instruction decoder basic operations', () => {
    it('Should decode a forward instruction.', () => {
      const value = decoder.decode("forward 5")
      expect(value).toEqual({ direction: 0, inc: 5 })
    })
    it('Should decode a up instruction.', () => {
      const value = decoder.decode("up 5")
      expect(value).toEqual({ direction: 1, inc: 5 })
    })
    it('Should decode a down instruction.', () => {
      const value = decoder.decode("down 5")
      expect(value).toEqual({ direction: 2, inc: 5 })
    })
  })
})
