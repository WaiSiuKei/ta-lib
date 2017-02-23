import chai from 'chai'
import Big from 'big.js'
const { assert } = chai

import atr from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(atr.bind(null, [Big(1)], [Big(0)], [Big(0)], null), Error, 'Timeperiod should be an instance of Big or string!')
    })
    //it('should throw error with wrong values', () => {
    //  TODO
    //})
  })
  describe('Output', () => {
    let input = {
      high: ['48.70', '48.72', '48.90', '48.87', '48.82', '49.05', '49.20', '49.35', '49.92', '50.19', '50.12', '49.66', '49.88', '50.19', '50.36', '50.57', '50.65', '50.43', '49.63', '50.33', '50.29', '50.17', '49.32', '48.50', '48.32', '46.80', '47.80', '48.39', '48.66', '48.79'],
      low: ['47.79', '48.14', '48.39', '48.37', '48.24', '48.64', '48.94', '48.86', '49.50', '49.87', '49.20', '48.90', '49.43', '49.73', '49.26', '50.09', '50.30', '49.21', '48.98', '49.61', '49.20', '49.43', '48.08', '47.64', '41.55', '44.28', '47.31', '47.20', '47.90', '47.73'],
      close: ['48.16', '48.61', '48.75', '48.63', '48.74', '49.03', '49.07', '49.32', '49.91', '50.13', '49.53', '49.50', '49.75', '50.03', '50.31', '50.52', '50.41', '49.34', '49.37', '50.23', '49.24', '49.93', '48.43', '48.18', '46.57', '45.41', '47.77', '47.72', '48.62', '47.85']
    }

    Object.keys(input).forEach(key => {
      input[key] = input[key].map(Big)
    })
    let output = ['NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', '0.567857142857143', '0.561581632653061', '0.546468658892128', '0.594578040399833', '0.598536751799846', '0.624355555242714', '0.657615872725377', '0.677071881816421', '0.760852461686677', '0.767934428709057', '1.196653398086980', '1.291178155366480', '1.369665429983160', '1.356832184984370', '1.327058457485480', '1.307982853379380']
    let result = atr(input['high'], input['low'], input['close'], '14')
    it('should return an array', () => {
      assert.isTrue(Array.isArray(result))
    })
    it('should return correct values', () => {
      for (let i = 0; i < input.length; ++i) {
        assert.isTrue(result[i].toFixed(15) === output[i])
      }
    })
  })
}
