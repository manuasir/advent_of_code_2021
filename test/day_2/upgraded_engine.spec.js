const Engine = require('../../src/day_2/upgraded_engine_firmware')
const engine = new Engine()
describe('Day 2', () => {
  describe('Upraded engine firmware upgraded', () => {
    it('x axis should be 0, it is the starting coordinates', () => {
      expect(engine.getCurrentX()).toEqual(0)
    })
    it('x axis should be 5 after going forward', () => {
      engine.forward(5)
      expect(engine.getCurrentX()).toEqual(5)
    })
    it('y axis should be 0 after going down', () => {
      engine.down(5)
      expect(engine.getCurrentY()).toEqual(0)
    })
    it('x axis should be 13 after going forward', () => {
      engine.forward(8)
      expect(engine.getCurrentX()).toEqual(13)
    })
    it('y axis should be 40 after going forward', () => {
      expect(engine.getCurrentY()).toEqual(40)
    })
    it('y axis should be 60 after finishing the program', () => {
      engine.up(3)
      engine.down(8)
      engine.forward(2)
      expect(engine.getCurrentY()).toEqual(60)
    })
    it('final coordinates should be correct', () => {
      const x = engine.getCurrentX()
      const y = engine.getCurrentY()
      expect(x).toEqual(15)
      expect(y).toEqual(60)
    })
    it('sum should be correct', () => {
      const value = engine.sum()
      expect(value).toEqual(900)
    })
  })
})
