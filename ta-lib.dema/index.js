var ema = require('ta-lib.ema')

var dema = (values, timeperiod = 30) => {
  if (!Number.isFinite(timeperiod)) throw new Error('Timeperiod should be a number!')
  var e = ema(values, timeperiod)
  var two_ema = e.map(v=> 2 * v)
  var ema_ema = ema(e, timeperiod)
  var d_ema = []
  for (let i = 0; i < values.length; i++) {
    d_ema.push(two_ema[i] - ema_ema[i])
  }
  return d_ema
}

module.exports = dema
