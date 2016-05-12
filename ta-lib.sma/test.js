import chai from 'chai'
const { assert } = chai

import sma from './index'

export default () => {
  describe('Params handling', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(sma.bind(null, [], null), Error, 'Timeperiod should be a number!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(sma.bind(null, [null], 1), Error, 'Input value should be a number!')
    })
  })
  describe('Calculation', () => {
    let input = [22.27, 22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43, 22.24, 22.29, 22.15, 22.39, 22.38, 22.61, 23.36, 24.05, 23.75, 23.83, 23.95, 23.63, 23.82, 23.87, 23.65, 23.19, 23.10, 23.33, 22.68, 23.10, 22.40, 22.17]
    let output = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,,22.2247500000,22.2128300000,22.2326900000,22.2623800000,22.3060600000,22.4232400000,22.6149900000,22.7669200000,22.9069300000,23.0777300000,23.2117800000,23.3786100000,23.5265700000,23.6537800000,23.7113900000,23.6855700000,23.6129800000,23.5057300000,23.4322500000,23.2773400000,23.1312100000]
    it('should work', () => {
      let result = sma(input, 10)
      for (let i = 0; i < input.lenght; ++i) {
        let equal = (Math.abs(result[i] - output[i]) < Number.EPSILON)
        assert.isTrue(equal)
      }
    })
  })
}
