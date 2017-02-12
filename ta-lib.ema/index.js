var Big = require('big.js')

var ema = function (close, timeperiod = '30') {
  if (!(timeperiod instanceof Big || typeof timeperiod === 'string'))
    throw new Error('Timeperiod should be an instance of Big or string!')
  var tp = Big(timeperiod)
  var timeperiodNum = parseInt(tp.toString())
  var alpha = Big('2').div(tp.plus('1'))
  var previous
  var initialAccumulator = new Big('0')
  var skip = 0

  return close.map((v, i) => {
    if (!(v instanceof Big)) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Input value should be an instance of Big or NaN!')
      }
    } else if (i < timeperiodNum + skip - 1) {
      initialAccumulator = initialAccumulator.plus(v)
      return NaN
    } else if (i === timeperiodNum + skip - 1) {
      initialAccumulator = initialAccumulator.plus(v)
      var initialValue = initialAccumulator.div(timeperiod)
      previous = initialValue
      return initialValue
    } else {
      var nextValue = alpha.times(v.minus(previous)).plus(previous)
      previous = nextValue
      return nextValue
    }
  })
}

module.exports = ema
