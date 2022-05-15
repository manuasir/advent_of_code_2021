const Engine = require('../../src/day_2/engine_firmware')
const engine = new Engine()
describe('Day 2', () => {
  describe('Depth measurement', () => {
    it('x axis should be 0, it is the starting coordinates', () => {
      const value = engine.getCurrentX()
      expect(value).toEqual(0)
    })
    it('x axis should be 5 after going forward', () => {
      const value = engine.forward(5)
      expect(value).toEqual(5)
    })
    it('x axis should be 10 after going down again', () => {
      const value = engine.down(5)
      expect(value).toEqual(5)
    })
    it('y axis should be 5 after going forward', () => {
      const value = engine.forward(8)
      expect(value).toEqual(13)
    })
    it('y axis should be 2 after going up', () => {
      const value = engine.up(3)
      expect(value).toEqual(2)
    })
    it('y axis should be 2 after going down', () => {
      const value = engine.down(8)
      expect(value).toEqual(10)
    })
    it('y axis should be 2 after going forward', () => {
      const value = engine.forward(2)
      expect(value).toEqual(15)
    })
    it('final coordinates should be correct', () => {
      const x = engine.getCurrentX()
      const y = engine.getCurrentY()
      expect(x).toEqual(15)
      expect(y).toEqual(10)
    })
    it('sum should be correct', () => {
      const value = engine.sum()
      expect(value).toEqual(150)
    })
  })
})
