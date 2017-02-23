var Big = require('big.js')
var max = require('ta-lib.max')

var minus_dm = function (high, low) {
  var skip = 0
  var dm = []
  for (i = 0; i < high.length; i++) {
    if (high[i] instanceof Big) {
      skip = i
      dm.push(NaN)
      break
    } else {
      dm.push(NaN)
    }
  }

  var zero = Big('0')
  for (var i = skip + 1; i < high.length; i++) {
    var deltaHigh = high[i].minus(high[i - 1])
    var deltaLow = low[i - 1].minus(low[i])
    dm.push(deltaLow.gt(deltaHigh) ? max([deltaLow, zero]) : zero)
  }

  return dm
}


module.exports = minus_dm
