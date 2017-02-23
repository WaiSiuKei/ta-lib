var Big = require('big.js')
var trange = require('ta-lib.trange')
var ema = require('ta-lib.ema')

var atr = function (high, low, close, timePeriod) {
  var tr = trange(high, low, close)
  return ema(tr, timePeriod)
}

module.exports = atr
