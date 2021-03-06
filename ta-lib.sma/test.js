import chai from 'chai'
import Big from 'big.js'
const { assert } = chai

import sma from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(sma.bind(null, [], null), Error, 'Timeperiod should be an instance of Big or string!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(sma.bind(null, [null], '1'), Error, 'Each value should be a Big instance or NaN!')
    })
  })
  describe('Output', () => {
    let input = ['45.73', '46.14', '46.36', '46.85', '46.92', '47.23', '46.86', '47.45', '47.61', '46.59', '46.9', '47.42', '47.58', '47.58', '48.01', '48.3', '48.72', '47.63', '47.35', '47.37', '47.75', '46.7', '46.28', '47.6', '48.24', '48.66', '48.64', '49.06', '49.16', '48.03', '47.87', '43.34', '42.99', '42.64', '42.91', '41.62', '42.16', '42.26', '41.65', '41.76', '41.72', '41.48', '41.42', '41.53', '41.55', '40.29', '40.72', '40.66', '40.96', '40.97', '41.21', '41.46', '42.9', '42.86', '42.88', '42.29', '42.5', '41.7', '41.56']
    let output = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, '46.83833333333333333333', '46.9925', '47.1125', '47.25', '47.37083333333333333333', '47.52083333333333333333', '47.55416666666666666667', '47.595', '47.58833333333333333333', '47.6', '47.60916666666666666667', '47.5575', '47.5725', '47.6275', '47.7175', '47.77', '47.83333333333333333333', '47.87', '47.90333333333333333333', '47.94666666666666666667', '47.61083333333333333333', '47.21416666666666666667', '46.87583333333333333333', '46.595', '46.09666666666666666667', '45.59', '45.05666666666666666667', '44.47416666666666666667', '43.86583333333333333333', '43.24583333333333333333', '42.7', '42.1625', '42.01166666666666666667', '41.89166666666666666667', '41.69583333333333333333', '41.51333333333333333333', '41.43333333333333333333', '41.33333333333333333333', '41.22583333333333333333', '41.18916666666666666667', '41.16416666666666666667', '41.2625', '41.3775', '41.49916666666666666667', '41.5625', '41.64166666666666666667', '41.75916666666666666667', '41.82916666666666666667']
    input = input.map(Big)
    let result = sma(input, '12')
    it('should return an array', () => {
      assert.isTrue(Array.isArray(result))
    })
    it('should return correct values', () => {
      for (let i = 0; i < input.length; ++i) {
        assert.isTrue(isNaN(result[i]) ? isNaN(output[i]) : result[i].toString() === output[i])
      }
    })
  })
}
