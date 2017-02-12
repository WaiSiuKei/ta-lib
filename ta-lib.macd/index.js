var ema = require('ta-lib.ema')
var Big = require('big.js')

var macd = (values, fastPeriod = '12', slowPeriod = '26', signalPeriod = '9')=> {
  if (typeof fastPeriod === 'string' || fastPeriod instanceof Big) {
    if (typeof slowPeriod === 'string' || slowPeriod instanceof Big) {
      if (Big(fastPeriod).gt(slowPeriod)) throw new Error('SlowPeriod should be greater than fastPeriod!')
    }
  }

  var macd = [],
    slowEMA = [],
    fastEMA = [],
    signalLine = [],
    histogram = []

  fastEMA = ema(values, fastPeriod)
  slowEMA = ema(values, slowPeriod)

  for (var i = 0; i < slowEMA.length; i++) {
    macd.push(isNaN(slowEMA[i]) ? NaN : fastEMA[i].minus(slowEMA[i]))
  }

  signalLine = ema(macd, signalPeriod)

  for (var j = 0; j < macd.length; j++) {
    histogram.push(isNaN(signalLine[j]) ? NaN : macd[j].minus(signalLine[j]))
  }

  return { macd, signalLine, histogram }
}

module.exports = macd
