import chai from 'chai'
const { assert } = chai

import macd from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(macd.bind(null, [], null, 1, 2), Error, 'Timeperiod should be a number!')
      assert.throws(macd.bind(null, [], 1, null, 2), Error, 'Timeperiod should be a number!')
      assert.throws(macd.bind(null, [], 1, 2, null), Error, 'Timeperiod should be a number!')
      assert.throws(macd.bind(null, [], 2, 1, 1), Error, 'SlowPeriod should be greater than fastPeriod!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(macd.bind(null, [null], 12, 26, 9), Error, 'Input value should be a number!')
    })
  })
  describe('Output', () => {
    let input = [45.73, 46.14, 46.36, 46.85, 46.92, 47.23, 46.86, 47.45, 47.61, 46.59, 46.9, 47.42, 47.58, 47.58, 48.01, 48.3, 48.72, 47.63, 47.35, 47.37, 47.75, 46.7, 46.28, 47.6, 48.24, 48.66, 48.64, 49.06, 49.16, 48.03, 47.87, 43.34, 42.99, 42.64, 42.91, 41.62, 42.16, 42.26, 41.65, 41.76, 41.72, 41.48, 41.42, 41.53, 41.55, 40.29, 40.72, 40.66, 40.96, 40.97, 41.21, 41.46, 42.9, 42.86, 42.88, 42.29, 42.5, 41.7, 41.56]
    let expectedMacd = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 0.331910756, 0.387650105, 0.460407143, 0.520140924, 0.470870913, 0.414139469, 0.003604697, -0.346000662, -0.643885195, -0.848394328, -1.101859953, -1.244810401, -1.334645533, -1.438480517, -1.494664843, -1.524841567, -1.550252487, -1.557280958, -1.536265874, -1.500698319, -1.556242847, -1.547723684, -1.528197574, -1.471552359, -1.409604656, -1.325860962, -1.225197258, -1.017495528, -0.846361744, -0.701041979, -0.626263907, -0.543788051, -0.536790864, -0.536359554]
    let expectedSignalLine = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 0.177648683, -0.027559919, -0.242419926, -0.442898021, -0.621247523, -0.784694122, -0.926688266, -1.046318926, -1.147105639, -1.229140702, -1.290565737, -1.332592253, -1.377322372, -1.411402634, -1.434761622, -1.44211977, -1.435616747, -1.41366559, -1.375971924, -1.304276644, -1.212693664, -1.110363327, -1.013543443, -0.919592365, -0.843032065, -0.781697563]
    let expectedHistogram = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, -0.821533878404, -0.820834409424, -0.859440027516, -0.801912379970, -0.713398009831, -0.653786394771, -0.567976576629, -0.478522640866, -0.403146848774, -0.328140255266, -0.245700136985, -0.168106066046, -0.178920475071, -0.136321049584, -0.093435951722, -0.029432589236, 0.026012090683, 0.087804628300, 0.150774665345, 0.286781116806, 0.366331920321, 0.409321348142, 0.387279536067, 0.375804313555, 0.306241200293, 0.245338008282]

    let result = macd(input, 12, 26, 9)
    it('should return an object contain properties of "macd", "signalLine" and "histogram"', () => {
      assert.property(result, 'macd')
      assert.property(result, 'signalLine')
      assert.property(result, 'histogram')
    })
    it('Each properties should be an array', () => {
      assert.isTrue(Array.isArray(result['macd']))
      assert.isTrue(Array.isArray(result['signalLine']))
      assert.isTrue(Array.isArray(result['histogram']))
    })
    it('should return correct values', () => {
      for (let i = 0; i < input.length; i++) {
        let delta = Math.abs(result['macd'][i] - expectedMacd[i])
        let equal = isNaN(delta) ? true : delta < 0.00001
        assert.isTrue(equal)
      }
      for (let i = 0; i < input.length; ++i) {
        let delta = Math.abs(result['signalLine'][i] - expectedSignalLine[i])
        let equal = isNaN(delta) ? true : delta < 0.00001

        assert.isTrue(equal)
      }
      for (let i = 0; i < input.length; ++i) {
        let delta = Math.abs(result['histogram'][i] - expectedHistogram[i])
        let equal = isNaN(delta) ? true : delta < 0.00001
        assert.isTrue(equal)
      }
    })
  })
}
