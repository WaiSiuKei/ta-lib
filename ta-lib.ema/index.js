const ema = (close, timeperiod = 30) => {
  if (!Number.isFinite(timeperiod)) throw new Error('Timeperiod should be a number!')
  var alpha = 2 / (timeperiod + 1)
  var previous
  var initialAccumulator = 0
  var skip = 0

  return close.map((v, i) => {
    if (!Number.isFinite(v)) {
      if (isNaN(v)) {
        skip += 1
        return NaN
      } else {
        throw new Error('Input value should be a number!')
      }
    } else if (i < timeperiod + skip - 1) {
      initialAccumulator += v
      return NaN
    } else if (i === timeperiod + skip - 1) {
      initialAccumulator += v
      let initialValue = initialAccumulator / timeperiod
      previous = initialValue
      return initialValue
    } else {
      let nextValue = alpha * (v - previous) + previous
      previous = nextValue
      return nextValue
    }
  })
}

module.exports = ema
