var sum = require('ta-lib.sum')
var Big = require('big.js')

var efficiencyRatio = function (values, timeperiod = '10') {
  if (!(timeperiod instanceof Big || typeof timeperiod === 'string')) throw new Error('Timeperiod should be an instance of Big or string!')
  var tp = Big(timeperiod)
  var timeperiodNum = parseInt(tp.toString())
  var window = []
  var skip = 0

  var priceDirection = values.map((v, i) => {
    if (!(v instanceof Big)) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Input value should be an instance of Big or NaN!')
      }
    } else if (i < timeperiodNum + skip) {
      window.push(v)
      return NaN
    } else if (i == timeperiodNum + skip) {
      window.push(v)

      return v.minus(window[0]).abs()
    } else {
      window.push(v)
      window.splice(0, 1)
      return v.minus(window[0]).abs()
    }
  })

  skip = 0
  var change = values.map((v, i) => {
      if (!(v instanceof Big)) {
        skip += 1
        return NaN
      } else if (i < skip + 1) {
        return NaN
      } else {
        return v.minus(values[i - 1]).abs()
      }
    }
  )

  window = []
  skip = 0
  var volatiity = change.map((v, i) => {
    if (!(v instanceof Big)) {
      skip += 1
      return NaN
    } else if (i < timeperiodNum + skip - 1) {
      window.push(v)
      return NaN
    } else if (i == timeperiodNum + skip - 1) {
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
    eRatio.push(isNaN(priceDirection[i]) && isNaN(volatiity[i]) ? NaN : priceDirection[i].div(volatiity[i]))
  }

  return eRatio
}

module.exports = efficiencyRatio
