var midpoint = function (values, timeperiod = 14) {
  if (!Array.isArray(values)) throw new Error('Input should be an array!')
  if (!values.length) throw new Error('Input should not be an empty array!')
  if (!Number.isFinite(timeperiod)) throw new Error('Timeperiod should be a number!')

  var skip = 0
  var window = []
  var high = 0
  var low = 0
  return values.map((v, i) => {
    if (!Number.isFinite(v)) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Input value should be a number!')
      }
    } else if (i < timeperiod + skip - 1) {
      window.push(v)
      return NaN
    } else if (i === timeperiod + skip - 1) {
      window.push(v)
      high = Math.max.apply(Math, window)
      low = Math.min.apply(Math, window)
      return (high + low) / 2
    } else {
      window.push(v)
      window.splice(0, 1)
      high = Math.max.apply(Math, window)
      low = Math.min.apply(Math, window)
      return (high + low) / 2
    }
  })
}

module.exports = midpoint
