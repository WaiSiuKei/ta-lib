var sum = require('ta-lib.sum')

var average = function (values) {
  return sum(values) / values.length
}

module.exports = average
