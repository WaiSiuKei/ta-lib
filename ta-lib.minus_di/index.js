var Big = require('big.js')
var trange = require('ta-lib.trange')
var minus_dm = require('ta-lib.minus_dm')
var sum = require('ta-lib.sum')

var minus_di = function (high, low, close, timePeriod) {
  if (!(timePeriod instanceof Big || typeof timePeriod === 'string'))
    throw new Error('Timeperiod should be an instance of Big or string!')

  var tp = Big(timePeriod)
  var timePeriodNum = parseInt(timePeriod.toString())

  var dm = minus_dm(high, low)
  var tr = trange(high, low, close)

  var skip = 0
  var window = []
  var previous
  var dmAcc = dm.map((d, i) => {
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

  window = []
  skip = 0
  var trAcc = tr.map((d, i) => {
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

  return dmAcc.map((d, i) => {
    if (isNaN(d)) {
      return NaN
    } else {
      return Big('100').times(d).div(trAcc[i])
    }
  })
}


module.exports = minus_di
