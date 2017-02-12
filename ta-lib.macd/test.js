import chai from 'chai'
import Big from 'big.js'
const { assert } = chai

import macd from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(macd.bind(null, [Big(0)], null, '1', '2'), Error, 'Timeperiod should be an instance of Big or string!')
      assert.throws(macd.bind(null, [Big(0)], '1', null, '2'), Error, 'Timeperiod should be an instance of Big or string!')
      assert.throws(macd.bind(null, [Big(0)], '1', '2', null), Error, 'Timeperiod should be an instance of Big or string!')
      assert.throws(macd.bind(null, [Big(0)], '2', '1', '1'), Error, 'SlowPeriod should be greater than fastPeriod!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(macd.bind(null, [null], '12', '26', '9'), Error, 'Input value should be an instance of Big or NaN!')
    })
  })
  describe('Output', () => {
    let input = ['45.73', '46.14', '46.36', '46.85', '46.92', '47.23', '46.86', '47.45', '47.61', '46.59', '46.9', '47.42', '47.58', '47.58', '48.01', '48.3', '48.72', '47.63', '47.35', '47.37', '47.75', '46.7', '46.28', '47.6', '48.24', '48.66', '48.64', '49.06', '49.16', '48.03', '47.87', '43.34', '42.99', '42.64', '42.91', '41.62', '42.16', '42.26', '41.65', '41.76', '41.72', '41.48', '41.42', '41.53', '41.55', '40.29', '40.72', '40.66', '40.96', '40.97', '41.21', '41.46', '42.9', '42.86', '42.88', '42.29', '42.5', '41.7', '41.56']
    input = input.map(Big)
    let output = {
      'macd': ["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "0.331910755800434", "0.387650104787525", "0.460407143398066", "0.520140924151076", "0.470870912784903", "0.414139468976251", "0.003604697115041", "-0.346000662002602", "-0.643885195077649", "-0.848394328454649", "-1.101859953425751", "-1.244810400871192", "-1.334645533190314", "-1.438480516822784", "-1.494664842838847", "-1.524841567292016", "-1.550252487393022", "-1.557280957701297", "-1.536265873667025", "-1.500698319239410", "-1.556242847032710", "-1.547723683941617", "-1.528197574010515", "-1.471552358833606", "-1.409604656243906", "-1.325860961551191", "-1.225197258170276", "-1.017495527508074", "-0.846361743912240", "-0.701041979056105", "-0.626263907114049", "-0.543788051237919", "-0.536790864426274", "-0.536359554366709"],
      'signalLine': ["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "0.177648683325894", "-0.027559919030215", "-0.242419925909322", "-0.442898020901696", "-0.621247523359420", "-0.784694122052092", "-0.926688266209443", "-1.046318926425958", "-1.147105638619371", "-1.229140702435756", "-1.290565736682010", "-1.332592253193490", "-1.377322371961334", "-1.411402634357391", "-1.434761622288015", "-1.442119769597134", "-1.435616746926488", "-1.413665589851429", "-1.375971923515198", "-1.304276644313773", "-1.212693664233467", "-1.110363327197994", "-1.013543443181205", "-0.919592364792548", "-0.843032064719293", "-0.781697562648776"],
      'histogram': ["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "-0.821533878403543", "-0.820834409424435", "-0.859440027516429", "-0.801912379969496", "-0.713398009830894", "-0.653786394770692", "-0.567976576629404", "-0.478522640866058", "-0.403146848773651", "-0.328140255265541", "-0.245700136985015", "-0.168106066045920", "-0.178920475071376", "-0.136321049584227", "-0.093435951722500", "-0.029432589236472", "0.026012090682582", "0.087804628300237", "0.150774665344922", "0.286781116805699", "0.366331920321227", "0.409321348141890", "0.387279536067156", "0.375804313554629", "0.306241200293019", "0.245338008282067"]
    }
    let result = macd(input, '12', '26', '9')
    it('should return an object contain properties of "macd", "signalLine" and "histogram"', () => {
      assert.property(result, 'macd')
      assert.property(result, 'signalLine')
      assert.property(result, 'histogram')
    })
    it('Each properties should be an array', () => {
      assert.isTrue(Array.isArray(result['macd']))
      assert.isTrue(Array.isArray(result['signalLine']))
      assert.isTrue(Array.isArray(result['histogram']))
    })
    it('should return correct values', () => {
      for (let i = 0; i < input.length; i++) {
        (['macd', 'signalLine', 'histogram']).forEach(key => {
          assert.isTrue(result[key][i].toFixed(15) === output[key][i])
        })
      }
    })
  })
}
