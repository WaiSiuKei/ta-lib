import chai from 'chai'
const { assert } = chai

import ema from './index'

export default () => {
  describe('Params handling', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(ema.bind(null, [], null), Error, 'Timeperiod should be a number!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(ema.bind(null, [null], 1), Error, 'Input value should be a number!')
    })
  })
  describe('Calculation', () => {
    let input = [22.27, 22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43, 22.24, 22.29, 22.15, 22.39, 22.38, 22.61, 23.36, 24.05, 23.75, 23.83, 23.95, 23.63, 23.82, 23.87, 23.65, 23.19, 23.10, 23.33, 22.68, 23.10, 22.40, 22.17]
    let output = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 22.2247500000, 22.2119227273, 22.2447731405, 22.2696507513, 22.3316960693, 22.5178967839, 22.7968064596, 22.9706598306, 23.1273398614, 23.2772053411, 23.3420407336, 23.4293969639, 23.5099066068, 23.5360508601, 23.4725870674, 23.4044076006, 23.3901516732, 23.2611240963, 23.2313924424, 23.0806847256, 22.9155602300]
    it('should work', () => {
      let result = ema(input, 10)
      for (let i = 0; i < input.lenght; ++i) {
        let equal = (Math.abs(result[i] - output[i]) < Number.EPSILON)
        assert.isTrue(equal)
      }
    })
  })
}
