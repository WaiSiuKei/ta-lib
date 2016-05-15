var sum = require('ta-lib.sum')

var efficiencyRatio = (values, timeperiod = 10) => {
  if (!Number.isFinite(timeperiod)) throw new Error('Timeperiod should be a number!')
  var window = []
  var skip = 0

  var priceDirection = values.map((v, i) => {
    if (!Number.isFinite(v)) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Input value should be a number!')
      }
    } else if (i < timeperiod + skip) {
      window.push(v)
      return NaN
    } else if (i == timeperiod + skip) {
      window.push(v)
      return Math.abs(v - window[0])
    } else {
      window.push(v)
      window.splice(0, 1)
      return Math.abs(v - window[0])
    }
  })

  skip = 0
  var change = values.map((v, i) => {
      if (!Number.isFinite(v)) {
        skip += 1
        return NaN
      } else if (i < skip + 1) {
        return NaN
      } else {
        return Math.abs(v - values[i - 1])
      }
    }
  )

  window = []
  skip = 0
  var volatiity = change.map((v, i) => {
    if (!Number.isFinite(v)) {
      skip += 1
      return NaN
    } else if (i < timeperiod + skip - 1) {
      window.push(v)
      return NaN
    } else if (i == timeperiod + skip - 1) {
      window.push(v)
      return sum(window)
    } else {
      window.push(v)
      window.splice(0, 1)
      return sum(window)
    }
  })

  var eRatio = []
  for (let i = 0; i < values.length; ++i) {
    eRatio.push(priceDirection[i] / volatiity[i])
  }

  return eRatio
}

module.exports = efficiencyRatio
