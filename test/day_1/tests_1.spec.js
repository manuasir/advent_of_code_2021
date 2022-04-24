const Loader = require('../../src/utils/loader.js')
const DephMeasurement = require('../../src/day_1/op')
const mockPath = './test/day_1/mock.txt'
const path = './src/day_1/data.txt'
const loader = new Loader()
const depthMeasurement = new DephMeasurement()
describe('Day 1', () => {
  const mockRows = loader.load(mockPath)
  const data = loader.load(path)
  describe('Depth measurement', () => {
    it('Should be the same as the resolved one.', () => {
      const value = depthMeasurement.calculate(mockRows)
      expect(value).toEqual(7)
    })
    it('Should be the same as the custom one.', () => {
      const value = depthMeasurement.calculate(data)
      expect(value).toEqual(1451)
    })
  })
})
