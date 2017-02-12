var max = function (arr) {
  let values = arr.filter(function (n) {
    return !isNaN(n)
  })
  if (!values.length) return NaN
  return values.reduce(function (acc, i) {
    return acc.lte(i) ? acc : i
  }, values[0])
}

module.exports = max
