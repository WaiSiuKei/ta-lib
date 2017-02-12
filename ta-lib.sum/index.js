const Big = require('big.js')

const sum = function (values, defaultSumValue = '0') {
  if (!Array.isArray(values)) throw new Error('Input should be an array!')
  if (!values.length) throw new Error('Input should not be an empty array!')
  return values.reduce(function (sum, value) {
    if (isNaN(value))
      return sum
    else if (value instanceof Big)
      return sum.plus(value)
    else
      throw new Error('Each value should be a Big instance or NaN!')
  }, Big(defaultSumValue))
}

module.exports = sum
