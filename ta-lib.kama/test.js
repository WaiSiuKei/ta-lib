import chai from 'chai'
import Big from 'big.js'
const { assert } = chai

import kama from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(kama.bind(null, [], null, '2', '30'), Error, 'Timeperiod should be an instance of Big or string!')
      assert.throws(kama.bind(null, [], '10', null, '30'), Error, 'Fastestperiod should be an instance of Big or string!')
      assert.throws(kama.bind(null, [], '10', '2', null), Error, 'Slowestperiod should be an instance of Big or string!')
      assert.throws(kama.bind(null, [], '10', '30', '2'), Error, 'Slowestperiod should be greater than Fastestperiod!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(kama.bind(null, [null], '10', '2', '30'), Error, 'Input value should be an instance of Big or NaN!')
    })
  })
  describe('output', () => {
    let input = ['110.46', '109.8', '110.17', '109.82', '110.15', '109.31', '109.05', '107.94', '107.76', '109.24', '109.4', '108.5', '107.96', '108.55', '108.85', '110.44', '109.89', '110.7', '110.79', '110.22', '110', '109.27', '106.69', '107.07', '107.92', '107.95', '107.7', '107.97', '106.09', '106.03', '107.65', '109.54', '110.26', '110.38', '111.94', '113.59', '113.98', '113.91', '112.62', '112.2', '111.1', '110.18', '111.13', '111.55', '112.08', '111.95', '111.6', '111.39', '112.25']
    input = input.map(Big)
    let output = ["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "109.240000000000000", "109.244940102699167", "109.216492062768414", "109.117349727103422", "109.098101349735974", "109.089369989739409", "109.124039781561939", "109.137562042509523", "109.276864188039085", "109.436482162171044", "109.456856130792372", "109.465095703768888", "109.461166163135382", "109.390445476740485", "109.316528984320214", "109.292408589740559", "109.183611806489751", "109.077780916995718", "108.949818297888068", "108.422952784549415", "108.015742141877349", "107.996711693140842", "108.006859491002569", "108.259591098605091", "108.481770111381856", "108.911935684670206", "109.673397500260275", "110.494739676764595", "111.107650423350752", "111.462158521990569", "111.609159151407727", "111.566316004972649", "111.549147348930052", "111.542454218647530", "111.542612537657749", "111.545668298696489", "111.565826287487820", "111.568828798280059", "111.552235315735350", "111.559543654751724"]
    let result = kama(input, '10', '2', '30')

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
