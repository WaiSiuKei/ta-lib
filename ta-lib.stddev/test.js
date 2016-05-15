import chai from 'chai'
const { assert } = chai

import stddev from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(stddev.bind(null, [], null), Error, 'Timeperiod should be a number!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(stddev.bind(null, [null], 1), Error, 'Input value should be a number!')
    })
  })
  describe('Output', () => {
    let input = [52.7800, 53.0200, 53.6700, 53.6700, 53.7375, 53.4500, 53.7150, 53.3850, 52.5100, 52.3150, 51.4500, 51.6000, 52.4300, 52.4700, 52.9100, 52.0700, 53.1200, 52.7700, 52.7300, 52.0850, 53.1900, 53.7300, 53.8700, 53.8450, 53.8800, 54.0800, 54.1350, 54.4950, 54.3000, 54.3950, 54.1600]
    let output = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 0.5054112805, 0.7301219504, 0.8573640198, 0.8336420470, 0.7887072096, 0.7162508290, 0.6754977794, 0.5846785442, 0.5078703082, 0.5183534026, 0.5260610706, 0.4809638760, 0.4901757338, 0.5784394955, 0.6229052898, 0.6700925309, 0.6220249191, 0.6610637261, 0.6903578782, 0.6511520560, 0.3604663646, 0.2429588443]
    let result = stddev(input, 10)
    it('should return an array', () => {
      assert.isTrue(Array.isArray(result))
    })
    it('should return correct values', () => {
      for (let i = 0; i < input.length; ++i) {
        let delta = Math.abs(result[i] - output[i])
        let equal = isNaN(delta) ? true : delta < 0.00001
        assert.isTrue(equal)
      }
    })
  })
}
