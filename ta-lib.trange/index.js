var Big = require('big.js')
var max = require('ta-lib.max')

var trange = function (high, low, close) {
  var tr = [], curr_diff, curr_high_diff, curr_low_diff, i

  var skip = 0
  for (i = 0; i < high.length; i++) {
    if (high[i] instanceof Big) {
      skip = i
      break
    } else {
      tr.push(NaN)
    }
  }

  tr[skip] = high[skip].minus(low[skip])
  for (i = skip + 1; i < high.length; i++) {
    var tmp = []
    tmp.push(high[i].minus(low[i]))
    tmp.push(low[i].minus(close[i - 1]).abs())
    tmp.push(high[i].minus(close[i - 1]).abs())
    tr[i] = max(tmp)
  }
  return tr
}

module.exports = trange
