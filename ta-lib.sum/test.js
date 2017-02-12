import chai from 'chai'
import Big from 'big.js'
const { assert } = chai

import sum from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong input', () => {
      assert.throws(sum.bind(null, null), Error, 'Input should be an array!')
    })
    it('should throw error with empty array', () => {
      assert.throws(sum.bind(null, []), Error, 'Input should not be an empty array!')
    })
    it('should throw error with wrong value', () => {
      assert.throws(sum.bind(null, [null]), Error, 'Each value should be a Big instance or NaN!')
    })
  })
  describe('output', () => {
    let input = ['53.7300', '53.8700', '53.8450', '53.8800', '54.0800', '54.1350', '54.4950', '54.3000', '54.3950', '54.1600']
    input = input.map(Big)
    let output = Big('540.89')
    let result = sum(input)
    it('should return a Big instance', () => {
      assert.isTrue(result instanceof Big)
    })
    it('should return correct values', () => {
      assert.isTrue(result.eq(output))
    })
  })
}
