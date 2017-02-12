var sum = require('ta-lib.sum')

var average = function (values) {
  return sum(values).div(values.length)
}

module.exports = average
