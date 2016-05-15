var eratio = require('ta-lib.eratio')

var sc = (values, timePeriod = 10, fastestPeriod = 2, slowestPeriod = 30) => {
  if (!Number.isFinite(fastestPeriod)) throw new Error('FastestPeriod should be a number!')
  if (!Number.isFinite(slowestPeriod)) throw new Error('SlowestPeriod should be a number!')
  if (fastestPeriod > slowestPeriod) throw new Error('SlowestPeriod should be greater than FastestPeriod!')

  var er = eratio(values, timePeriod)
  var fastestSC = 2 / (fastestPeriod + 1)
  var slowestSC = 2 / (slowestPeriod + 1)
  return er.map(v => {
    if (!Number.isFinite(fastestPeriod)) {
      return NaN
    } else {
      return Math.pow(v * (fastestSC - slowestSC) + slowestSC, 2)
    }
  })
}

module.exports = sc
