var trange = require('ta-lib.trange')
var average = require('ta-lib.average')
var Big = require('big.js')

var atr = function (high, low, close, timePeriod) {
  if (!(timePeriod instanceof Big || typeof timePeriod === 'string'))
    throw new Error('Timeperiod should be an instance of Big or string!')

  var tp = Big(timePeriod)
  var timePeriodNum = parseInt(tp.toString())
  var skip = 0
  var window = []
  var previous

  var tr = trange(high, low, close)
  return tr.map((t, i) => {
    if (isNaN(t)) {
      skip += 1
      return NaN
    }
    if (i < timePeriodNum + skip - 1) {
      window.push(t)
      return NaN
    }
    if (i === timePeriodNum + skip - 1) {
      window.push(t)
      previous = average(window)
      return previous
    }
    previous = previous.times(tp.minus('1')).plus(t).div(tp)
    return previous
  })
}


module.exports = atr
