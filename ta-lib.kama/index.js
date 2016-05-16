var eratio = require('ta-lib.eratio')

var smoothingConstant = (values, timeperiod = 10, fastestperiod = 2, slowestperiod = 30) => {
  var er = eratio(values, timeperiod)
  var fastestSC = 2 / (fastestperiod + 1)
  var slowestSC = 2 / (slowestperiod + 1)
  return er.map(v => {
    if (!Number.isFinite(fastestperiod)) {
      return NaN
    } else {
      return Math.pow(v * (fastestSC - slowestSC) + slowestSC, 2)
    }
  })
}

var kama = (values, timeperiod = 10, fastestperiod = 2, slowestperiod = 30) => {
  if (!Number.isFinite(fastestperiod)) throw new Error('Fastestperiod should be a number!')
  if (!Number.isFinite(slowestperiod)) throw new Error('Slowestperiod should be a number!')
  if (fastestperiod > slowestperiod) throw new Error('Slowestperiod should be greater than Fastestperiod!')

  var skip = 0
  var previous = NaN
  var nextValue = NaN
  var sc = smoothingConstant(values, timeperiod, fastestperiod, slowestperiod)
  return values.map((v, i) => {
    if (!Number.isFinite(v)) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Input value should be a number!')
      }
    } else if (i < timeperiod + skip - 1) {
      return NaN
    } else if (i === timeperiod + skip - 1) {
      previous = v
      return v
    } else {
      nextValue = previous + sc[i] * (v - previous)
      previous = nextValue
      return nextValue
    }
  })
}

module.exports = kama
