var sma = require('ta-lib.sma')
var stddev = require('ta-lib.stddev')

var bbands = (values, timeperiod = 20, nbdevup = 2, nbdevdn = 2) => {
  if (!Number.isFinite(timeperiod)) throw new Error('Timeperiod should be a number!')
  if (!Number.isFinite(nbdevup)) throw new Error('Nbdevup should be a number!')
  if (!Number.isFinite(nbdevdn)) throw new Error('Nbdevdn should be a number!')
  var middleband = sma(values, timeperiod)

  var standardDeviations = stddev(values, timeperiod)
  var upper = standardDeviations.map(v => v * nbdevup)
  var down = standardDeviations.map(v => v * nbdevdn)
  var upperband = []
  var lowerband = []
  for (let i = 0; i < values.length; ++i) {
    upperband.push(middleband[i] + upper[i])
    lowerband.push(middleband[i] - down[i])
  }
  return {upperband, middleband, lowerband}
}

module.exports = bbands
