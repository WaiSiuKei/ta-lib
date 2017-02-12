var sma = require('ta-lib.sma')
var stddev = require('ta-lib.stddev')
var Big = require('big.js')

var bbands = (values, timeperiod = '20', nbdevup = '2', nbdevdn = '2') => {
  if (!(typeof nbdevup === 'string' || nbdevup instanceof Big)) throw new Error('Nbdevup should be an instance of Big or string!')
  if (!(typeof nbdevdn === 'string' || nbdevdn instanceof Big)) throw new Error('Nbdevdn should be an instance of Big or string!')
  var middleband = sma(values, timeperiod)

  var standardDeviations = stddev(values, timeperiod)
  var upper = standardDeviations.map(v => isNaN(v) ? NaN : v.times(nbdevup))
  var lower = standardDeviations.map(v => isNaN(v) ? NaN : v.times(nbdevdn))
  var upperband = []
  var lowerband = []
  for (let i = 0; i < values.length; ++i) {
    upperband.push(isNaN(middleband[i]) ? NaN : middleband[i].plus(upper[i]))
    lowerband.push(isNaN(middleband[i]) ? NaN : middleband[i].minus(lower[i]))
  }
  return { upperband, middleband, lowerband }
}

module.exports = bbands
