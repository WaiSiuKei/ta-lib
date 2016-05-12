import ema from 'ta-lib.ema'

const macd = (values, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9)=> {
  if (Number.isFinite(fastPeriod) && Number.isFinite(slowPeriod) && fastPeriod > slowPeriod) throw new Error('SlowPeriod should be greater than fastPeriod!')

  var macd = [],
    slowEMA = [],
    fastEMA = [],
    signalLine = [],
    histogram = []

  fastEMA = ema(values, fastPeriod)
  slowEMA = ema(values, slowPeriod)

  for (let i = 0; i < slowEMA.length; i++) {
    macd.push(fastEMA[i] - slowEMA[i])
  }

  signalLine = ema(macd, signalPeriod)

  for (let i = 0; i < macd.length; i++) {
    histogram.push(macd[i] - signalLine[i])
  }

  return {macd, signalLine, histogram}
}

module.exports = macd
