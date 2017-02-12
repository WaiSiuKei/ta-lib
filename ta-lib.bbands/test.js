import chai from 'chai'
import Big from 'big.js'
const { assert } = chai

import bbands from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(bbands.bind(null, [], null, '1', '2'), Error, 'Timeperiod should be an instance of Big or string!')
      assert.throws(bbands.bind(null, [], '1', null, '2'), Error, 'Nbdevup should be an instance of Big or string!')
      assert.throws(bbands.bind(null, [], '1', '2', null), Error, 'Nbdevdn should be an instance of Big or string!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(bbands.bind(null, [null], '5', '2', '2'), Error, 'Each value should be a Big instance or NaN!')
    })
  })
  describe('Output', () => {
    let input = ['86.15570', '89.08670', '88.78290', '90.32280', '89.06710', '91.14530', '89.43970', '89.17500', '86.93020', '87.67520', '86.95960', '89.42990', '89.32210', '88.72410', '87.44970', '87.26340', '89.49850', '87.90060', '89.12600', '90.70430', '92.90010', '92.97840', '91.80210', '92.66470', '92.68430', '92.30210', '92.77250', '92.53730', '92.94900', '93.20390', '91.06690', '89.83180', '89.74350', '90.39940', '90.73870', '88.01770', '88.08670', '88.84390', '90.77810', '90.54160', '91.38940', '90.65000']
    input = input.map(Big)
    let output = {
      'upperband': ["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "91.291862427937805", "91.949267623625543", "92.612595139852051", "92.934199537585743", "93.311949972858589", "93.728449946222452", "93.899592180050908", "94.266254867494310", "94.565096148602390", "94.786912319635847", "95.043000977050186", "94.907605023469128", "94.902911518256316", "94.895320043607274", "94.861012933337775", "94.673629187342158", "94.556592978694269", "94.678751506006848", "94.575785587816693", "94.534271306394381", "94.532306097845825", "94.369250701528345", "94.148503468329283"],
      'middleband': ["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "88.707940000000000", "89.045160000000000", "89.239745000000000", "89.390705000000000", "89.507800000000000", "89.688660000000000", "89.746500000000000", "89.913140000000000", "90.081255000000000", "90.382195000000000", "90.658630000000000", "90.863995000000000", "90.884090000000000", "90.905160000000000", "90.988925000000000", "91.153375000000000", "91.191090000000000", "91.120500000000000", "91.167665000000000", "91.250270000000000", "91.242135000000000", "91.166600000000000", "91.050180000000000"],
      'lowerband': ["NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "NaN", "86.124017572062195", "86.141052376374457", "85.866894860147949", "85.847210462414257", "85.703650027141411", "85.648870053777548", "85.593407819949092", "85.560025132505690", "85.597413851397610", "85.977477680364153", "86.274259022949814", "86.820384976530872", "86.865268481743684", "86.914999956392726", "87.116837066662225", "87.633120812657842", "87.825587021305731", "87.562248493993152", "87.759544412183307", "87.966268693605619", "87.951963902154175", "87.963949298471655", "87.951856531670717"]
    }
    let result = bbands(input, '20', '2', '2')
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
        (['middleband', 'upperband', 'lowerband']).forEach(key => {
          assert.isTrue(result[key][i].toFixed(15) === output[key][i])
        })
      }
    })
  })
}
