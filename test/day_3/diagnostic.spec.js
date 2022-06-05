const Loader = require('../../src/utils/loader.js')
const Diagnostic = require('../../src/day_3/diagnostic')
const mockPath = './test/day_3/mock.txt'
const dataPath = './test/day_3/data.txt'
const loader = new Loader()
describe('Day 3', () => {
  const mockReport = loader.load(mockPath)
  const report = loader.load(dataPath)
  describe('Diagnostic module', () => {
    const diagnostic = new Diagnostic(mockReport)
    const actual = new Diagnostic(report)
    it('Should create a correct Diagnostic object.', () => {
      expect(diagnostic.constructor.name).toEqual("Diagnostic")
    })
    it('Should return the correct rows number.', () => {
      expect(diagnostic.getNumFiles()).toEqual(12)
    })
    it('Should return the correct columns number.', () => {
      expect(diagnostic.getNumCols()).toEqual(5)
    })
    it('Should return the correct columns by index.', () => {
      expect(diagnostic.getCol(0)).toEqual([0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0])
    })
    it('Should return the correct gamma value.', () => {
      expect(diagnostic.gammaValue()).toEqual("10110")
    })
    it('Should return the correct consumption value.', () => {
      expect(diagnostic.exec()).toEqual(198)
    })
    it('Should return the correct consumption value.', () => {
      expect(diagnostic.exec()).toEqual(198)
    })
    it('Should return the correct consumption value.', () => {
      expect(actual.exec()).toEqual(3847100)
    })
  })

})
