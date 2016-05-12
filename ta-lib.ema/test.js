import chai from 'chai'
const { assert } = chai

import ema from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(ema.bind(null, [], null), Error, 'Timeperiod should be a number!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(ema.bind(null, [null], 1), Error, 'Input value should be a number!')
    })
  })
  describe('output', () => {
    let input = [45.73, 46.14, 46.36, 46.85, 46.92, 47.23, 46.86, 47.45, 47.61, 46.59, 46.9, 47.42, 47.58, 47.58, 48.01, 48.3, 48.72, 47.63, 47.35, 47.37, 47.75, 46.7, 46.28, 47.6, 48.24, 48.66, 48.64, 49.06, 49.16, 48.03, 47.87, 43.34, 42.99, 42.64, 42.91, 41.62, 42.16, 42.26, 41.65, 41.76, 41.72, 41.48, 41.42, 41.53, 41.55, 40.29, 40.72, 40.66, 40.96, 40.97, 41.21, 41.46, 42.9, 42.86, 42.88, 42.29, 42.5, 41.7, 41.56]
    let output = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 46.83833333, 46.9524359, 47.04898422, 47.1968328, 47.36655083, 47.57477378, 47.58327012, 47.54738241, 47.52009281, 47.55546315, 47.42385343, 47.24787598, 47.30204891, 47.44634908, 47.6330646, 47.78797774, 47.98367347, 48.16464678, 48.14393189, 48.10178853, 47.36920568, 46.69548173, 46.07156146, 45.58516739, 44.97514164, 44.54204292, 44.1909594, 43.80004257, 43.48618986, 43.21446835, 42.94762706, 42.71260751, 42.5306679, 42.37979591, 42.05828885, 41.85239826, 41.66895237, 41.55988278, 41.46913158, 41.42926518, 41.43399362, 41.65953306, 41.84422028, 42.00357101, 42.04763701, 42.11723131, 42.05304188, 41.97718928]
    let result = ema(input, 12)
    it('should return an array', () => {
      assert.isTrue(Array.isArray(result))
    })
    it('should return correct values', () => {
      for (let i = 0; i < input.length; ++i) {
        let delta = Math.abs(result[i] - output[i])
        let equal = isNaN(delta) ? true : delta < 0.0001
        assert.isTrue(equal)
      }
    })
    it('should skip NaN', () => {
      let input = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 0.331910755800, 0.387650104788, 0.460407143398, 0.520140924151, 0.470870912785, 0.414139468976, 0.003604697115, -0.346000662003, -0.643885195078, -0.848394328455, -1.101859953426, -1.244810400871, -1.334645533190, -1.438480516823, -1.494664842839, -1.524841567292, -1.550252487393, -1.557280957701, -1.536265873667, -1.500698319239, -1.556242847033, -1.547723683942, -1.528197574011, -1.471552358834, -1.409604656244, -1.325860961551, -1.225197258170, -1.017495527508, -0.846361743912, -0.701041979056, -0.626263907114, -0.543788051238, -0.536790864426, -0.536359554367]
      let output = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,0.177648683,-0.027559919,-0.242419926,-0.442898021,-0.621247523,-0.784694122,-0.926688266,-1.046318926,-1.147105639,-1.229140702,-1.290565737,-1.332592253,-1.377322372,-1.411402634,-1.434761622,-1.44211977,-1.435616747,-1.41366559,-1.375971924,-1.304276644,-1.212693664,-1.110363327,-1.013543443,-0.919592365,-0.843032065,-0.781697563]
      let result = ema(input, 9)
      for (let i = 0; i < input.length; ++i) {
        let delta = Math.abs(result[i] - output[i])
        let equal = isNaN(delta) ? true : delta < 0.00001
        assert.isTrue(equal)
      }
    })

  })
}