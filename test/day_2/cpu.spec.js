const Loader = require('../../src/utils/loader.js')
const CPU = require('../../src/day_2/cpu')
const Decoder = require('../../src/day_2/decoder')
const mockPath = './test/day_2/mock.txt'
const decoder = new Decoder()
const loader = new Loader()
const cpu = new CPU(decoder)
describe('Day 2', () => {
  const program = loader.load(mockPath)
  describe('Instruction cpu loading a full program', () => {
    it('Should return the full decoded program.', () => {
      const value = cpu.exec(program)
      expect(value).toEqual([{ direction: 0, inc: 5 },
        { direction: 2, inc: 5 },
        { direction: 0, inc: 8 },
        { direction: 1, inc: 3 },
        { direction: 2, inc: 8 },
        { direction: 0, inc: 2 }])
    })
  })
})
