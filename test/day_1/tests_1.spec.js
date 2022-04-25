const Loader = require('../../src/utils/loader.js')
const DephMeasurement = require('../../src/day_1/op')
const mockPath = './test/day_1/mock.txt'
const mockPathSec = './test/day_1/mock_2.txt'
const path = './test/day_1/data.txt'
const pathSum = './test/day_1/data_2.txt'

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
  describe('Triplet depth measurement', () => {
    const mockRowsTriplets = loader.load(mockPathSec)
    const dataTriplets = loader.load(pathSum)
    it('Should return a grouped array.', () => {
      const value = depthMeasurement.createGroups(mockRowsTriplets, 3)
      expect(Array.isArray(value)).toEqual(true)
      expect(value.length).toEqual(8)
    })
    it('Should return a sumarized array.', () => {
      const value = depthMeasurement.sum(depthMeasurement.createGroups(mockRowsTriplets, 3))
      expect(Array.isArray(value)).toEqual(true)
      expect(value.length).toEqual(8)
      expect(value[0]).toEqual(607)
      expect(value[value.length - 1]).toEqual(792)
    })
    it('Should return a sumarized array with mocked data.', () => {
      const value = depthMeasurement.calculate(depthMeasurement.sum(depthMeasurement.createGroups(mockRowsTriplets, 3)))
      expect(value).toEqual(5)
    })
    it('Should return the number of elements larger than the previous sum.', () => {
      const value = depthMeasurement.calculate(depthMeasurement.sum(depthMeasurement.createGroups(mockRowsTriplets, 3)))
      expect(value).toEqual(5)
    })
    it('Should return the number of elements actual larger than the previous sum.', () => {
      const value = depthMeasurement.calculate(depthMeasurement.sum(depthMeasurement.createGroups(dataTriplets, 3)))
      expect(value).toEqual(1395)
    })
  })
})
