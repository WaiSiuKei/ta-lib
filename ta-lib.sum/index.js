var sum = function (values) {
  if (!Array.isArray(values)) throw new Error('Input should be an array!')
  if (!values.length) throw new Error('Input should not be an empty array!')
  return values.reduce(function (sum, value) {
    if (!Number.isFinite(value) || !Number.isFinite(sum)) throw new Error('Each value should be a number!')
    return sum + value
  }, 0)
}

module.exports = sum
