export default function sma(values, timeperiod = 30) {
  if (!Number.isFinite(timeperiod)) throw new Error('Timeperiod should be a number!')
  var window = []

  return values.map((v, i) => {
    if (!Number.isFinite(v)) throw new Error('Input value should be a number!')
    window.push(v)
    if (i < timeperiod - 1) {
      return NaN
    } else {
      if (i >= timeperiod) window.splice(0, 1)
      return window.reduce((a, b) => a + b) / timeperiod
    }
  })
}
