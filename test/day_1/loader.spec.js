const Loader = require('../../src/utils/loader.js')
const mockPath = './test/day_1/mock.txt'
const path = './src/day_1/data.txt'
const loader = new Loader()
describe('Loader', () => {

  describe('Basic functionality', () => {
    it('Number of rows should be correct.', () => {
      const path = './test/day_1/mock.txt'
      const rows = loader.load(path)
      expect(rows.length).toEqual(10)
    })
    it('Number of my puzzle rows should be correct.', () => {
      const path = './src/day_1/data.txt'
      const rows = loader.load(path)
      expect(rows.length).toEqual(2000)
    })
  })
})
