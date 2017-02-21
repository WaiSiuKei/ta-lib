var Big = require('big.js')
var max = require('ta-lib.max')
var sum = require('ta-lib.sum')

var minus_dm = function (high, low, timePeriod) {
  if (!(timePeriod instanceof Big || typeof timePeriod === 'string'))
    throw new Error('Timeperiod should be an instance of Big or string!')

  var tp = Big(timePeriod)
  var timePeriodNum = parseInt(timePeriod.toString())

  var skip = 0
  var dm1 = []
  for (i = 0; i < high.length; i++) {
    if (high[i] instanceof Big) {
      skip = i
      dm1.push(NaN)
      break
    } else {
      dm1.push(NaN)
    }
  }

  var zero = Big('0')
  for (var i = skip + 1; i < high.length; i++) {
    var deltaHigh = high[i].minus(high[i - 1])
    var deltaLow = low[i - 1].minus(low[i])
    dm1.push(deltaHigh.gt(deltaLow) ? max([deltaHigh, zero]) : zero)
  }

  if (tp.eq('1')) return dm1

  skip = 0
  var window = []
  var previous
  return dm1.map((d, i) => {
    if (isNaN(d)) {
      skip += 1
      return NaN
    } else if (i < timePeriodNum + skip - 1) {
      window.push(d)
      return NaN
    } else if (i === timePeriodNum + skip - 1) {
      window.push(d)
      previous = sum(window)
      return previous
    } else {
      previous = previous.minus(previous.div(tp)).plus(d)
      return previous
    }
  })
}


module.exports = minus_dm
