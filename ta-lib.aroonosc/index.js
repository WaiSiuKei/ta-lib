var aroon = require('ta-lib.aroon')

var aroonosc = function (high, low, timePeriod) {
  var aroonOut = aroon(high, low, timePeriod)

  return aroonOut.up.map((u, i) => {
    var d = aroonOut.down[i]
    return isNaN(u) ? NaN : u.minus(d)
  })
}


module.exports = aroonosc
