var Big = require('big.js')

var maxIndex = function (values) {
  return values.reduce(function (prev, v, i, arr) {
    return arr[prev].gte(v) ? prev : i
  }, 0)
}

var minIndex = function (values) {
  return values.reduce(function (prev, v, i, arr) {
    return arr[prev].lte(v) ? prev : i
  }, 0)
}


var aroon = function (high, low, timePeriod) {
  if (!(timePeriod instanceof Big || typeof timePeriod === 'string'))
    throw new Error('Timeperiod should be an instance of Big or string!')

  var tp = Big(timePeriod)
  var timePeriodNum = parseInt(timePeriod.toString())
  var skip = 0

  var up = []
  var down = []
  var windowUp = []
  var windowDown = []

  high.forEach((h, i) => {
    let l = low[i]
    if (!(h instanceof Big && l instanceof Big)) {
      if (isNaN(h) && isNaN(l)) {
        skip += 1
        up.push(NaN)
        down.push(NaN)
        return;
      }
      else
        throw new Error('Input value should be an instance of Big or NaN!')
    }

    windowUp.push(h)
    windowDown.push(l)

    if (i < timePeriodNum + skip - 1) {
      up.push(NaN)
      down.push(NaN)
    } else if (i === timePeriodNum + skip - 1) {
      up.push(tp.minus(tp.minus(maxIndex(windowUp) + 1)).div(tp).times('100'))
      down.push(tp.minus(tp.minus(minIndex(windowDown) + 1)).div(tp).times('100'))
    } else {
      windowUp.splice(0, 1)
      windowDown.splice(0, 1)
      up.push(tp.minus(tp.minus(maxIndex(windowUp) + 1)).div(tp).times('100'))
      down.push(tp.minus(tp.minus(minIndex(windowDown) + 1)).div(tp).times('100'))
    }
  })

  return {
    up,
    down
  }
}


module.exports = aroon
