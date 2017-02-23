var Big = require('big.js')
var max = require('ta-lib.max')
var sum = require('ta-lib.sum')

var trange = function (high, low, close, timePeriod = '0') {
  if (!(timePeriod instanceof Big || typeof timePeriod === 'string'))
    throw new Error('Timeperiod should be an instance of Big or string!')

  var tp = Big(timePeriod)
  var timePeriodNum = parseInt(timePeriod.toString())

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

  tr[skip] = NaN
  for (i = skip + 1; i < high.length; i++) {
    var tmp = []
    tmp.push(high[i].minus(low[i]))
    tmp.push(low[i].minus(close[i - 1]).abs())
    tmp.push(high[i].minus(close[i - 1]).abs())
    tr[i] = max(tmp)
  }
  if (tp.eq('0')) return tr

  skip = 0
  var window = []
  var previous
  return tr.map((d, i) => {
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

module.exports = trange
