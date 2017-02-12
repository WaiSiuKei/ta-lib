var sum = require('ta-lib.sum')
var Big = require('big.js')

var sma = function (values, timeperiod = '30') {
  if (!(timeperiod instanceof Big || typeof timeperiod === 'string')) throw new Error('Timeperiod should be an instance of Big or string!')
  var window = []
  var skip = 0
  var timeperiodNum = parseInt(typeof timeperiod === 'string' ? timeperiod : timeperiod.toString())

  return values.map((v, i) => {
    if (!v instanceof Big) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Input value should be an instance of Big or NaN!')
      }
    } else if (i < timeperiodNum + skip - 1) {
      window.push(v)
      return NaN
    } else if (i == timeperiodNum + skip - 1) {
      window.push(v)
      return sum(window).div(timeperiod)
    } else {
      window.push(v)
      window.splice(0, 1)
      return sum(window).div(timeperiod)
    }
  })
}

module.exports = sma
