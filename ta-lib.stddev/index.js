var average = require('ta-lib.average')

var standardDeviation = values => {
  var avg = average(values)
  var squareDiffs = values.map(value => Math.pow(value - avg, 2))
  return Math.sqrt(average(squareDiffs))
}

var stddev = function (values, timeperiod = 5) {
  if (!Number.isFinite(timeperiod)) throw new Error('Timeperiod should be a number!')
  var window = []
  var skip = 0

  return values.map((v, i) => {
    if (!Number.isFinite(v)) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Input value should be a number!')
      }
    } else if (i < timeperiod + skip - 1) {
      window.push(v)
      return NaN
    } else if (i == timeperiod + skip - 1) {
      window.push(v)
      return standardDeviation(window)
    } else {
      window.push(v)
      window.splice(0, 1)
      return standardDeviation(window)
    }
  })
}

module.exports = stddev
