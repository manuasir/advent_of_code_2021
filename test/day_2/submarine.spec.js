const Loader = require('../../src/utils/loader.js')
const CPU = require('../../src/day_2/cpu')
const Decoder = require('../../src/day_2/decoder')
const Submarine = require('../../src/day_2/submarine')
const Engine = require('../../src/day_2/engine_firmware')
const EngineV2 = require('../../src/day_2/upgraded_engine_firmware')

const mockPath = './test/day_2/mock.txt'
const path = './test/day_2/data.txt'
const decoder = new Decoder()
const loader = new Loader()
const cpu = new CPU(decoder)
const engine = new Engine()


describe('Day 2', () => {

  describe('Submarine module', () => {
    const submarine = new Submarine(cpu, engine)
    describe('Mocked data', () => {
      const program = loader.load(mockPath)
      submarine.run(program)
      it('Should return the submarine navigator.', () => {
        const value = submarine.getCurrentCoordinates()
        expect(value).toEqual({ "x": 15, "y": 10 })
      })
      it('Should return the summary values.', () => {
        const value = submarine.getCurrentSum()
        expect(value).toEqual(150)
      })
    })
    describe('Actual data', () => {
      const yellowCpu = new CPU(decoder)
      const yellowEngine = new Engine()
      const yellowSubmarine = new Submarine(yellowCpu, yellowEngine)
      const actualData = loader.load(path)
      yellowSubmarine.run(actualData)
      it('Should return the submarine navigator.', () => {
        const value = yellowSubmarine.getCurrentCoordinates()
        expect(value).toEqual({ "x": 1962, "y": 987 })
      })
      it('Should return the summary values.', () => {
        const value = yellowSubmarine.getCurrentSum()
        expect(value).toEqual(1936494)
      })
    })
  })


  describe('Submarine module with upgraded engine', () => {

    describe('Actual data', () => {
      const yellowCpu = new CPU(decoder)
      const yellowEngine = new EngineV2()
      const yellowSubmarine = new Submarine(yellowCpu, yellowEngine)
      const actualData = loader.load(path)
      yellowSubmarine.run(actualData)
      it('Should return the submarine navigator.', () => {
        const value = yellowSubmarine.getCurrentCoordinates()
        expect(value).toEqual({ "x": 1962, "y": 1017893 })
      })
      it('Should return the summary values.', () => {
        const value = yellowSubmarine.getCurrentSum()
        expect(value).toEqual(1997106066)
      })
    })
  })

})
