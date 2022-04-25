
class DepthMeasurement {

  /**
   * The array to which elements will be sumarily added
   * @param {Array} arr
   * @returns {Array}
   */
  sum(arr) {
    return arr.map((item) => { return item.reduce((acc, element) => { return acc + element }, 0) })
  }

  /**
   * Group an array by size
   * @param {Array} data
   * @param Number} groupSize
   * @returns {Array}
   */
  createGroups(data, groupSize) {
    let groups = []
    for (let i = 0; i < data.length; i++) {
      groups[i] = []
      for (let j = i; j < i + groupSize; j++) {
        if (!data[j]) {
          groups.pop()
          continue
        }
        groups[i].push(Number(data[j]))
      }
    }
    return groups
  }

  /**
   * Calculate the number of elements that are greater than the previous one
   * @param {Array} data
   * @returns {Number}
   */
  calculate(data) {
    let counter = 0
    try {
      for (let i = 1; i < data.length; i++) {
        if (Number(data[i - 1]) < Number(data[i])) {
          counter++
        }
      }
      return counter
    } catch (error) {
      console.error('Error while calculating; ', error.message || error)
    }
  }
}

module.exports = DepthMeasurement