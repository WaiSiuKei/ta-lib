var ema = require('ta-lib.ema')

var dema = function (values, timeperiod = '30') {
  var e = ema(values, timeperiod)
  var two_ema = e.map(v=> isNaN(v) ? NaN : v.times('2'))
  var ema_ema = ema(e, timeperiod)
  var d_ema = []
  for (let i = 0; i < values.length; i++) {
    d_ema.push(isNaN(ema_ema[i]) ? NaN : two_ema[i].minus(ema_ema[i]))
  }
  return d_ema
}

module.exports = dema
