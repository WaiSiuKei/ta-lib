var Big = require('big.js')
var max = require('ta-lib.max')
var min = require('ta-lib.min')

var midpoint = function (values, timeperiod = '14') {
  if (!Array.isArray(values)) throw new Error('Input should be an array!')
  if (!values.length) throw new Error('Input should not be an empty array!')
  if (!(timeperiod instanceof Big || typeof timeperiod === 'string')) throw new Error('Timeperiod should be an instanceof Big or string!')

  var timeperiodNum = parseInt(Big(timeperiod).toString())
  var skip = 0
  var window = []
  var high = 0
  var low = 0
  return values.map((v, i) => {
    if (!(v instanceof Big)) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Input value should be an instance of Big or NaN!')
      }
    } else if (i < timeperiodNum + skip - 1) {
      window.push(v)
      return NaN
    } else if (i === timeperiodNum + skip - 1) {
      window.push(v)
      high = max(window)
      low = min(window)
      return high.plus(low).div('2')
    } else {
      window.push(v)
      window.splice(0, 1)
      high = max(window)
      low = min(window)
      return high.plus(low).div('2')
    }
  })
}

module.exports = midpoint
