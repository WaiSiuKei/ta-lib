var Big = require('big.js')

var adl = function (high, low, close, volume) {
  var moneyFlowMultiplier = high.map((h, i) => {
    let c = close[i]
    let l = low[i]
    if (isNaN(h) && isNaN(c) && isNaN(l))
      return NaN
    else if (h instanceof Big && c instanceof Big && l instanceof Big) {
      return c.times('2').minus(l).minus(h).div(h.minus(l))
    } else {
      throw new Error('Input value be an instance of Big or NaN!')
    }
  })

  var moneyFlowVolume = moneyFlowMultiplier.map((m, i) => {
    let v = volume[i]
    if (isNaN(m) && isNaN(v))
      return NaN
    else if (m instanceof Big && v instanceof Big)
      return m.times(volume[i])
    else
      throw new Error('Input value be an instance of Big or NaN!')
  })

  let first = true
  let previous = NaN
  return moneyFlowVolume.map((v, i) => {

    if (isNaN(v)) return NaN
    else {
      if (isNaN(previous)) {
        previous = v
        return v
      } else {
        previous = previous.plus(v)
        return previous
      }
    }
  })
}

module.exports = adl
