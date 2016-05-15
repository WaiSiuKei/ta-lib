import chai from 'chai'
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
      assert.throws(sum.bind(null, [null]), Error, 'Each value should be a number!')
    })
  })
  describe('output', () => {
    let input = [53.7300,53.8700,53.8450,53.8800,54.0800,54.1350,54.4950,54.3000,54.3950,54.1600]
    let output = 540.89
    let result = sum(input)
    it('should return a number', () => {
      assert.isTrue(Number.isFinite(result))
    })
    it('should return correct values', () => {
      let delta = Math.abs(result - output)
      let equal = isNaN(delta) ? true : delta < 0.0001
      assert.isTrue(equal)
    })
  })
}
