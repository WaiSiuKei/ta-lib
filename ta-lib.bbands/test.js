import chai from 'chai'
const { assert } = chai

import bbands from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(bbands.bind(null, [], null, 1, 2), Error, 'Timeperiod should be a number!')
      assert.throws(bbands.bind(null, [], 1, null, 2), Error, 'Nbdevup should be a number!')
      assert.throws(bbands.bind(null, [], 1, 2, null), Error, 'Nbdevdn should be a number!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(bbands.bind(null, [null], 5, 2, 2), Error, 'Input value should be a number!')
    })
  })
  describe('Output', () => {
    let input = [86.15570, 89.08670, 88.78290, 90.32280, 89.06710, 91.14530, 89.43970, 89.17500, 86.93020, 87.67520, 86.95960, 89.42990, 89.32210, 88.72410, 87.44970, 87.26340, 89.49850, 87.90060, 89.12600, 90.70430, 92.90010, 92.97840, 91.80210, 92.66470, 92.68430, 92.30210, 92.77250, 92.53730, 92.94900, 93.20390, 91.06690, 89.83180, 89.74350, 90.39940, 90.73870, 88.01770, 88.08670, 88.84390, 90.77810, 90.54160, 91.38940, 90.65000]
    let expectedMiddleBand = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 88.7079400000, 89.0451600000, 89.2397450000, 89.3907050000, 89.5078000000, 89.6886600000, 89.7465000000, 89.9131400000, 90.0812550000, 90.3821950000, 90.6586300000, 90.8639950000, 90.8840900000, 90.9051600000, 90.9889250000, 91.1533750000, 91.1910900000, 91.1205000000, 91.1676650000, 91.2502700000, 91.2421350000, 91.1666000000, 91.0501800000]
    let expectedUpperBand = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 91.2918624279, 91.9492676236, 92.6125951399, 92.9341995376, 93.3119499729, 93.7284499462, 93.8995921801, 94.2662548675, 94.5650961486, 94.7869123196, 95.0430009771, 94.9076050235, 94.9029115183, 94.8953200436, 94.8610129333, 94.6736291873, 94.5565929787, 94.6787515060, 94.5757855878, 94.5342713064, 94.5323060978, 94.3692507015, 94.1485034683]
    let expectedLoewrBand = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 86.1240175721, 86.1410523764, 85.8668948601, 85.8472104624, 85.7036500271, 85.6488700538, 85.5934078199, 85.5600251325, 85.5974138514, 85.9774776804, 86.2742590229, 86.8203849765, 86.8652684817, 86.9149999564, 87.1168370667, 87.6331208127, 87.8255870213, 87.5622484940, 87.7595444122, 87.9662686936, 87.9519639022, 87.9639492985, 87.9518565317]
    let result = bbands(input, 20, 2, 2)
    it('should return an object contain properties of "upperband", "middleband" and "lowerband"', () => {
      assert.property(result, 'upperband')
      assert.property(result, 'middleband')
      assert.property(result, 'lowerband')
    })
    it('Each properties should be an array', () => {
      assert.isTrue(Array.isArray(result['upperband']))
      assert.isTrue(Array.isArray(result['middleband']))
      assert.isTrue(Array.isArray(result['lowerband']))
    })
    it('should return correct values', () => {
      for (let i = 0; i < input.length; i++) {
        let delta = Math.abs(result['middleband'][i] - expectedMiddleBand[i])
        let equal = isNaN(delta) ? true : delta < 0.00001
        assert.isTrue(equal)
      }
      for (let i = 0; i < input.length; ++i) {
        let delta = Math.abs(result['upperband'][i] - expectedUpperBand[i])
        let equal = isNaN(delta) ? true : delta < 0.00001
        assert.isTrue(equal)
      }
      for (let i = 0; i < input.length; ++i) {
        let delta = Math.abs(result['lowerband'][i] - expectedLoewrBand[i])
        let equal = isNaN(delta) ? true : delta < 0.00001
        assert.isTrue(equal)
      }
    })
  })
}
