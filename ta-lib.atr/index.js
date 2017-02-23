var trange = require('ta-lib.trange')
var Big = require('big.js')
var ema = require('ta-lib.ema')

var atr = function (high, low, close, timePeriod) {
  if (!(timePeriod instanceof Big || typeof timePeriod === 'string'))
    throw new Error('Timeperiod should be an instance of Big or string!')

  var tp = Big(timePeriod)
  var timePeriodNum = parseInt(tp.toString())
  var skip = 0
  var window = []
  var previous

  var tr = trange(high, low, close)
  return ema(tr, timePeriod)
}


module.exports = atr
