import chai from 'chai'
import Big from 'big.js'
const { assert } = chai

import stddev from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(stddev.bind(null, [], null), Error, 'Timeperiod value should be an instance of Big or string!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(stddev.bind(null, [null], "1"), Error, 'Each value should be a Big instance or NaN!')
    })
  })
  describe('Output', () => {
    let input = ['52.7800', '53.0200', '53.6700', '53.6700', '53.7375', '53.4500', '53.7150', '53.3850', '52.5100', '52.3150', '51.4500', '51.6000', '52.4300', '52.4700', '52.9100', '52.0700', '53.1200', '52.7700', '52.7300', '52.0850', '53.1900', '53.7300', '53.8700', '53.8450', '53.8800', '54.0800', '54.1350', '54.4950', '54.3000', '54.3950', '54.1600']
    input = input.map(Big)
    let output = ["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "0.505411280542886", "0.730121950430200", "0.857364019830550", "0.833642046984196", "0.788707209615837", "0.716250828969852", "0.675497779419000", "0.584678544159096", "0.507870308248080", "0.518353402612542", "0.526061070599222", "0.480963875982386", "0.490175733793504", "0.578439495539508", "0.622905289751179", "0.670092530923902", "0.622024919114982", "0.661063726126309", "0.690357878205210", "0.651152055974639", "0.360466364588986", "0.242958844251449"]
    let result = stddev(input, '10')
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
