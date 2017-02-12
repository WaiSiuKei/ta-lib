import chai from 'chai'
import Big from 'big.js'
const { assert } = chai

import midpoint from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong input', () => {
      assert.throws(midpoint.bind(null, null, '10'), Error, 'Input should be an array!')
    })
    it('should throw error with empty array', () => {
      assert.throws(midpoint.bind(null, [], '10'), Error, 'Input should not be an empty array!')
    })
    it('should throw error with wrong value', () => {
      assert.throws(midpoint.bind(null, [null], '10'), Error, 'Input value should be an instance of Big or NaN!')
    })
    it('should throw error with wrong timeperiod', () => {
      assert.throws(midpoint.bind(null, [Big(1)], null), Error, 'Timeperiod should be an instanceof Big or string!')
    })
  })
  describe('output', () => {
    let input = ['11.10466096', '11.56591914', '12.0541753', '14.28523279', '6.780730083', '14.98938955', '9.515494835', '14.41045275', '5.812019759', '9.113507278', '13.11266723', '5.856561759', '5.275513248', '9.759230898', '10.54777532', '6.441858863', '11.09746587', '6.518792873', '14.3838315', '8.987485003', '11.10760564', '6.943765548', '13.70530196', '8.036644431', '8.996416945', '7.015600293', '12.671527', '11.81835064', '9.680351631', '9.428536911', '5.69049577', '12.56432211', '6.752186043', '11.89390764', '11.55968756', '11.4339759', '7.620895659', '12.07460981', '7.930193739']
    input = input.map(Big)
    let output = ["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "10.400704654500000", "10.400704654500000", "10.400704654500000", "10.132451399000000", "10.132451399000000", "10.132451399000000", "9.842982999000000", "9.842982999000000", "9.194090239000000", "9.829672374000000", "9.829672374000000", "9.829672374000000", "9.829672374000000", "10.412845181500000", "10.412845181500000", "10.412845181500000", "10.451312186500000", "10.451312186500000", "10.663798524000000", "10.324533754000000", "10.324533754000000", "9.697898865000000", "9.697898865000000", "9.181011385000000", "9.181011385000000", "9.181011385000000", "9.181011385000000", "9.127408940000000", "9.127408940000000", "9.127408940000000"]
    let result = midpoint(input, '10')
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
