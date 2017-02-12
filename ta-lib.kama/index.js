var eratio = require('ta-lib.eratio')
var Big = require('big.js')

var smoothingConstant = function (values, timeperiod = '10', fastestperiod = '2', slowestperiod = '30') {
  var er = eratio(values, timeperiod)
  var fastestSC = Big('2').div(Big(fastestperiod).plus('1'))
  var slowestSC = Big('2').div(Big(slowestperiod).plus('1'))
  return er.map(v => {
    if (!(v instanceof Big)) {
      return NaN
    } else {
      return v.times(fastestSC.minus(slowestSC)).plus(slowestSC).pow(2)
    }
  })
}

var kama = (values, timeperiod = '10', fastestperiod = '2', slowestperiod = '30') => {
  if (!(fastestperiod instanceof Big || typeof fastestperiod === 'string')) throw new Error('Fastestperiod should be an instance of Big or string!')
  if (!(slowestperiod instanceof Big || typeof slowestperiod === 'string')) throw new Error('Slowestperiod should be an instance of Big or string!')
  if (Big(fastestperiod).gt(slowestperiod)) throw new Error('Slowestperiod should be greater than Fastestperiod!')
  if (!(timeperiod instanceof Big || typeof timeperiod === 'string')) throw new Error('Timeperiod should be an instance of Big or string!')

  var timeperiodNum = parseInt(Big(timeperiod).toString())
  var skip = 0
  var previous = NaN
  var nextValue = NaN
  var sc = smoothingConstant(values, timeperiod, fastestperiod, slowestperiod)
  return values.map((v, i) => {
    if (!(v instanceof Big)) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Input value should be an instance of Big or NaN!')
      }
    } else if (i < timeperiodNum + skip - 1) {
      return NaN
    } else if (i === timeperiodNum + skip - 1) {
      previous = v
      return v
    } else {
      nextValue = previous.plus(sc[i].times(v.minus(previous)))
      previous = nextValue
      return nextValue
    }
  })
}

module.exports = kama
