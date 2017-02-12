var average = require('ta-lib.average')
var Big = require('big.js')

var standardDeviation = function (values) {
  var avg = average(values)
  var squareDiffs = values.map(value => value.minus(avg).pow(2))
  return average(squareDiffs).sqrt()
}

var stddev = function (values, timeperiod = '5') {
  if (!(typeof timeperiod === 'string' || timeperiod instanceof Big)) throw new Error('Timeperiod value should be an instance of Big or string!')
  var tp = Big(timeperiod)
  var timeperiodNum = parseInt(timeperiod.toString())
  var window = []
  var skip = 0

  return values.map((v, i) => {
    if (!(v instanceof Big)) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Each value should be a Big instance or NaN!')
      }
    } else if (i < timeperiodNum + skip - 1) {
      window.push(v)
      return NaN
    } else if (i == timeperiodNum + skip - 1) {
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
