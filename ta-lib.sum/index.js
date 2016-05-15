var sum = function (values) {
  return values.reduce(function (sum, value) {
    return sum + value
  }, 0)
}

module.exports = sum
