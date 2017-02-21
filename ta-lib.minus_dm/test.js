import chai from 'chai'
import Big from 'big.js'
const { assert } = chai

import minus_dm from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(minus_dm.bind(null, [Big(1)], [Big(0)], null), Error, 'Timeperiod should be an instance of Big or string!')
    })
    //it('should throw error with wrong values', () => {
    //  TODO
    //})
  })
  describe('Output', () => {
    let input = {
      high: ['30.19830', '30.27760', '30.44580', '29.34780', '29.34770', '29.28860', '28.83340', '28.73460', '28.66540', '28.85320', '28.63560', '27.67610', '27.21120', '26.86510', '27.40900', '26.94410', '26.51890', '26.51890', '27.09270', '27.68600', '28.44770', '28.52670', '28.66540', '29.01160', '29.87200', '29.80280', '29.75290', '30.65460', '30.59510', '30.76350', '31.16980', '30.89230', '30.04020', '30.66450', '30.59510', '31.97240', '32.10110', '32.03170', '31.62550', '31.85340', '32.70550', '32.76480', '32.57660', '32.13080', '33.12150', '33.19090', '32.51720', '32.43790', '33.22070', '32.83430', '33.61690', '33.74590', '33.59710', '34.08250', '34.57800', '34.22140', '34.76630', '34.73640', '35.01400', '34.94470', '34.41940', '34.39950', '34.16190', '33.33960', '33.38920', '33.50790', '33.96380', '34.41940', '34.71670', '33.94400', '33.65670', '34.50860', '34.86530', '34.74640', '35.17250', '36.16330', '36.45040', '36.03440', '36.45040', '36.73800', '36.60910', '36.82700', '36.83690', '36.88650', '36.38020', '35.99480', '35.85610', '35.87590', '35.72730', '36.06880', '35.60250', '34.97750', '35.58270', '36.06880', '36.20760', '36.45550', '36.43590', '36.54480', '35.81070', '35.25520', '35.20580', '34.59080', '34.72960', '34.85860', '35.31490', '35.50340', '36.63420', '37.14010', '37.26910', '37.69560', '37.87420', '38.38010', '39.17360', '39.05460', '39.09440', '39.27290', '39.11410', '39.85810', '39.53300', '39.73920', '39.86800', '39.81850', '39.61020', '39.74910', '39.53090', '39.18360', '39.89780', '39.83830', '39.63990', '38.69750', '38.79680', '39.08440', '39.52090', '40.03680', '40.24500', '40.43350', '40.27570', '40.14580', '40.75090', '39.87800', '40.26490', '39.15380', '39.25320', '40.05660', '40.45340', '40.95930', '41.19730', '41.28670', '41.37590', '41.61400', '42.13970', '42.31830', '42.31930', '42.39880', '42.52790', '42.86550', '42.38880', '41.79310', '42.35910', '42.31940', '42.30190', '41.83280', '40.95900', '41.10790', '41.84270', '41.78320', '42.31930', '42.24980', '42.56760', '42.44850', '42.98760', '42.81580', '42.68670', '42.96470', '43.15330', '43.51090', '43.18320', '43.42150', '43.45130', '42.80590', '42.02140', '41.89250', '41.85260', '41.27670', '41.02850', '41.57470', '42.10090', '42.34920', '43.21290', '43.46270', '43.82860', '43.84840', '43.82860', '44.33500', '44.28540', '44.17610', '43.76900', '43.24280', '44.08680', '43.83840', '43.90800', '43.52080', '43.31220', '43.98760', '44.17610', '44.18610', '44.41440', '43.97760', '43.68960', '43.80880', '44.22570', '44.27540', '44.28540', '44.35490', '44.38460', '43.89810', '44.24460', '44.89110', '45.05020', '45.32870', '45.73660', '46.05480', '46.00520', '46.01510', '46.03010', '46.23890', '46.25380', '46.30360', '46.02510', '46.30360', '46.39310', '45.89570', '46.24390', '46.27370', '46.30360', '46.39310', '46.35720', '46.10460', '45.23920', '44.36390', '44.65240', '44.61260', '44.19490', '43.78690', '43.05150', '43.54830', '43.73720', '43.42890', '42.79230', '42.95140', '43.27970', '43.08080', '43.55820', '43.64780', '44.11520', '44.33410', '44.69210', '44.81150', '44.79160', '44.50320', '44.55290', '44.46350', '44.62250', '45.24920', '45.60730', '45.57750', '45.56750', '46.29370', '46.39310', '46.80090', '47.02980', '47.09930', '47.27840', '47.12920', '47.35790', '47.64640', '47.62650', '47.74760', '47.90690', '48.09610', '47.96670', '48.39490', '48.12600', '48.19560', '48.34510', '48.24540', '48.49440', '48.51430', '48.69360', '48.66370', '48.61390', '48.84290', '48.99230', '49.14160', '49.70930', '49.97810', '49.90840', '49.45030', '49.66940', '49.97810', '50.14740', '50.35650', '50.43620', '50.21710', '49.42050', '50.11760', '50.07780', '49.95820', '49.11180', '48.29520', '48.11610', '46.60250', '47.59820', '48.18580', '48.45450', '48.58400', '47.31940', '47.07050', '47.37910', '46.43320', '45.08890', '45.44740', '45.13370', '44.57100', '45.37760', '45.69630', '45.79580', '46.05470', '46.08470', '46.57250', '46.09450', '45.26810', '44.29230', '44.72050', '44.92960', '45.34780', '46.04480', '46.57250', '46.94100', '46.98090', '47.22980', '47.56900', '47.03030', '46.36180', '45.88290', '45.55370', '45.44400', '44.35650', '43.56830', '42.86000', '42.72180', '43.26900', '43.90750', '44.27670', '44.52610', '44.92520', '45.39410', '45.70340', '45.63350', '45.52190', '44.70570', '45.15460', '45.65350', '45.87300', '45.99270', '46.35180', '46.61120', '46.47160', '46.30200', '45.98270', '46.68110', '46.59130', '46.88060', '46.81080', '46.74090', '47.08010', '46.84070', '45.81310', '45.13470', '44.95510', '45.00500', '45.67340', '45.71330', '45.35420', '44.92520', '45.23450', '44.01730', '44.15700', '44.21680', '44.05720', '44.14700', '43.74790', '44.80550', '45.17460', '45.91290', '45.92280', '46.34190', '46.59130', '46.56140', '47.25970', '47.58900', '47.68870', '47.86830', '48.14000', '48.93000', '49.17000', '49.02100', '49.16000', '49.69000', '49.75000', '49.54000', '49.53000', '49.84000', '49.53000', '49.05000', '49.76000', '49.71000', '49.54000', '49.87000', '50.02000', '50.21000', '50.75000', '50.64000', '51.50000', '51.72000', '51.30000', '51.57000', '51.71010', '51.69000', '52.23000', '52.15000', '52.23000', '52.45000', '52.49000', '52.75000', '52.93000', '53.04000', '53.86140', '53.81000', '53.83000', '54.04010', '53.77000', '53.48000', '53.36720', '52.88000', '52.24620', '51.87000', '52.79000', '52.59000', '52.91000', '52.45000', '53.25000', '53.13000', '52.90000', '52.73550', '53.46000', '53.81000', '53.94000', '53.95000', '54.52000', '54.15000', '54.44000', '54.55000', '54.74000', '54.62000', '54.70000', '54.66000', '54.68000', '54.76000', '54.89000', '54.96000', '54.87000', '54.86000', '54.92000', '54.90000', '54.80000', '54.62000', '55.69000', '55.55000', '55.76000', '55.96000', '56.05000', '56.18000', '56.36000', '56.56000', '56.73000', '57.02000', '57.23000', '57.26000', '56.35000', '56.49000', '56.46000', '56.55000', '56.98000', '57.35000', '57.22000', '56.16000', '57.18000', '57.17000', '57.14000', '57.42000', '57.97000', '58.07000', '58.12000'],
      low: ['29.40720', '29.31820', '29.96110', '28.74430', '28.55660', '28.40810', '28.08180', '27.42890', '27.65650', '27.83450', '27.39920', '27.09270', '26.18260', '26.13320', '26.62770', '26.13320', '25.43070', '25.35180', '25.87600', '26.96400', '27.14210', '28.01230', '27.88400', '27.99280', '28.76430', '29.14020', '28.71270', '28.92900', '30.03040', '29.38630', '30.13650', '30.42670', '29.34670', '29.99060', '29.51520', '30.94180', '31.53640', '31.35800', '30.92200', '31.19940', '32.13080', '32.22980', '31.97240', '31.55620', '32.21010', '32.62620', '31.76420', '31.78400', '32.09120', '32.19030', '32.76480', '33.04230', '33.05220', '33.32970', '33.72600', '33.69620', '34.20150', '34.31050', '34.14200', '33.56740', '33.56740', '33.36920', '33.21080', '32.65600', '32.77470', '32.92350', '33.08200', '33.63680', '33.86470', '33.00270', '33.01270', '32.87380', '34.11240', '33.89440', '34.43930', '35.28160', '35.77680', '35.59850', '36.00480', '36.08390', '35.78680', '36.33180', '35.95520', '36.41100', '35.86590', '35.25160', '35.19230', '35.12300', '35.24180', '35.62250', '34.73940', '34.49150', '34.99740', '34.99740', '35.76120', '35.83070', '35.82070', '36.09850', '35.21560', '34.75930', '34.23350', '34.02520', '34.37250', '34.28330', '34.20380', '35.11650', '35.85050', '36.42590', '36.87220', '37.30870', '37.33850', '37.82450', '38.08250', '38.46930', '38.55860', '38.61810', '38.68760', '39.19350', '39.09440', '39.32250', '39.45130', '39.14390', '38.92570', '39.27290', '39.02490', '38.73720', '38.88600', '39.32250', '38.96530', '38.15200', '38.30070', '38.23120', '38.88600', '39.42170', '39.77880', '39.92760', '39.75890', '39.35220', '39.83830', '39.47130', '38.84640', '38.72720', '38.70750', '39.20350', '40.13590', '40.26490', '40.67170', '40.88980', '40.87990', '41.23710', '41.50490', '41.87190', '41.91220', '41.86250', '42.14040', '42.07810', '41.47520', '41.28670', '41.59440', '41.73350', '41.30650', '40.71070', '40.43270', '40.54190', '40.92980', '41.47520', '41.84270', '41.76330', '41.98170', '42.07110', '42.54760', '42.56760', '42.18030', '42.28950', '42.63700', '42.75610', '42.48810', '42.71650', '42.48810', '41.88250', '41.00860', '41.24700', '40.63130', '40.35320', '40.55190', '40.98880', '41.48520', '41.78320', '42.57750', '43.09380', '43.30240', '43.24280', '43.32210', '43.80880', '43.93780', '43.73920', '43.04420', '42.97470', '43.55060', '43.42150', '43.69950', '42.59730', '42.80590', '43.57040', '43.66970', '43.57040', '43.35200', '43.51090', '43.05400', '43.01430', '43.92790', '43.64000', '43.87820', '43.85840', '43.97760', '43.45130', '43.76710', '44.43350', '44.79160', '44.97070', '45.35860', '45.69680', '45.74660', '45.71670', '45.50780', '46.02510', '45.91570', '45.82620', '45.67690', '45.68680', '45.87590', '45.28900', '45.36850', '45.97530', '45.40830', '45.70680', '45.18960', '45.06020', '43.80690', '43.88650', '43.81690', '43.77710', '43.09080', '42.40440', '42.65300', '42.80220', '43.19010', '42.39440', '41.89690', '42.41430', '42.53370', '42.52370', '42.53370', '42.93150', '43.61790', '44.02570', '44.21460', '44.38380', '44.32410', '43.71740', '44.08540', '43.59800', '44.16490', '44.71210', '45.20940', '45.18960', '45.15960', '45.74660', '46.19420', '46.15430', '46.55230', '46.73130', '46.85070', '46.66170', '46.98000', '47.27840', '47.34800', '47.12030', '47.05050', '47.56830', '47.70780', '47.69780', '47.53850', '47.89690', '47.85710', '47.86710', '47.58830', '47.93670', '48.18580', '48.16580', '48.03630', '48.42970', '48.73340', '48.65380', '49.29100', '49.65940', '48.99230', '48.69360', '49.22130', '49.51510', '49.05200', '49.87850', '50.08760', '49.00230', '48.77320', '49.40050', '48.99230', '49.22130', '47.87700', '47.43890', '41.37460', '44.09640', '47.11030', '47.00070', '47.69780', '47.52860', '46.18420', '45.87560', '46.02490', '45.35770', '44.06320', '43.30650', '44.45160', '43.04760', '43.93380', '44.89960', '45.00920', '44.93940', '44.93940', '45.88540', '44.74780', '44.03340', '43.40600', '43.50560', '44.05320', '44.42160', '45.21830', '45.26130', '46.30370', '46.44310', '46.75090', '46.22210', '46.04260', '45.58360', '45.09480', '44.84540', '44.70570', '42.96970', '42.54070', '41.67280', '41.99200', '42.15160', '42.60060', '43.57830', '43.97740', '44.35650', '44.69570', '45.13470', '44.88530', '44.19690', '43.99730', '43.75790', '44.45630', '45.13470', '45.27440', '45.80310', '46.10240', '45.77320', '45.14470', '44.96510', '46.10250', '46.14230', '46.39180', '46.41170', '45.94280', '46.68110', '46.17230', '45.10480', '44.34650', '44.60590', '44.19690', '44.92520', '45.00500', '44.45630', '44.43630', '44.35650', '43.36380', '43.16930', '43.39870', '42.87000', '43.49850', '43.07950', '43.96740', '44.62590', '45.44400', '45.51880', '45.71330', '46.21220', '46.14230', '46.83070', '46.97040', '47.08010', '47.42930', '47.75000', '48.11010', '48.61000', '48.42000', '48.32000', '49.15000', '49.35000', '48.59000', '49.11000', '48.75000', '48.78100', '48.20000', '49.00000', '48.91000', '49.00000', '49.08000', '49.62000', '49.26000', '50.28000', '50.17000', '50.63000', '51.30000', '50.42000', '50.87000', '50.79000', '51.21000', '51.85000', '51.42000', '51.66000', '51.84000', '52.16980', '51.98000', '52.57500', '52.36000', '53.50000', '53.51000', '53.44990', '53.21000', '53.10000', '52.66000', '52.11000', '52.29000', '50.85000', '51.35000', '52.13000', '52.14000', '52.17000', '51.77000', '52.56000', '52.67000', '52.10000', '51.88000', '52.84000', '53.21000', '53.50000', '53.68000', '53.82000', '53.68990', '53.95000', '54.09000', '54.27000', '54.23000', '54.03000', '54.06000', '54.41000', '54.16000', '54.62000', '54.79000', '54.61000', '54.21000', '54.55000', '54.73000', '54.55000', '54.21000', '54.95000', '54.92000', '55.07000', '55.68000', '55.32000', '55.58000', '55.95000', '56.20000', '56.41000', '56.46000', '56.49000', '56.32000', '55.68000', '55.65000', '55.68000', '56.05000', '56.45000', '56.92000', '55.47000', '55.39000', '56.36000', '56.84000', '56.40000', '56.90000', '57.40000', '57.56000', '57.75000']
    }
    Object.keys(input).forEach(key=> {
      input[key] = input[key].map(Big)
    })

    let output1 = ['NaN', '0.00000', '0.16820', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.18780', '0.00000', '0.00000', '0.00000', '0.00000', '0.54390', '0.00000', '0.00000', '0.00000', '0.57380', '0.59330', '0.76170', '0.07900', '0.13870', '0.34620', '0.86040', '0.00000', '0.00000', '0.90170', '0.00000', '0.00000', '0.40630', '0.00000', '0.00000', '0.62430', '0.00000', '1.37730', '0.12870', '0.00000', '0.00000', '0.22790', '0.85210', '0.05930', '0.00000', '0.00000', '0.99070', '0.06940', '0.00000', '0.00000', '0.78280', '0.00000', '0.78260', '0.12900', '0.00000', '0.48540', '0.49550', '0.00000', '0.54490', '0.00000', '0.27760', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.04960', '0.11870', '0.45590', '0.45560', '0.29730', '0.00000', '0.00000', '0.85190', '0.35670', '0.00000', '0.42610', '0.99080', '0.28710', '0.00000', '0.41600', '0.28760', '0.00000', '0.21790', '0.00000', '0.04960', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.34150', '0.00000', '0.00000', '0.60520', '0.48610', '0.13880', '0.24790', '0.00000', '0.10890', '0.00000', '0.00000', '0.00000', '0.00000', '0.13880', '0.12900', '0.45630', '0.18850', '1.13080', '0.50590', '0.12900', '0.42650', '0.17860', '0.50590', '0.79350', '0.00000', '0.03980', '0.17850', '0.00000', '0.74400', '0.00000', '0.20620', '0.12880', '0.00000', '0.00000', '0.13890', '0.00000', '0.00000', '0.71420', '0.00000', '0.00000', '0.00000', '0.09930', '0.28760', '0.43650', '0.51590', '0.20820', '0.18850', '0.00000', '0.00000', '0.60510', '0.00000', '0.00000', '0.00000', '0.09940', '0.80340', '0.39680', '0.50590', '0.23800', '0.08940', '0.08920', '0.23810', '0.52570', '0.17860', '0.00100', '0.07950', '0.12910', '0.33760', '0.00000', '0.00000', '0.56600', '0.00000', '0.00000', '0.00000', '0.00000', '0.14890', '0.73480', '0.00000', '0.53610', '0.00000', '0.31780', '0.00000', '0.53910', '0.00000', '0.00000', '0.27800', '0.18860', '0.35760', '0.00000', '0.23830', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.54620', '0.52620', '0.24830', '0.86370', '0.24980', '0.36590', '0.00000', '0.00000', '0.50640', '0.00000', '0.00000', '0.00000', '0.00000', '0.84400', '0.00000', '0.06960', '0.00000', '0.00000', '0.67540', '0.18850', '0.00000', '0.22830', '0.00000', '0.00000', '0.11920', '0.41690', '0.00000', '0.01000', '0.06950', '0.02970', '0.00000', '0.34650', '0.64650', '0.15910', '0.27850', '0.40790', '0.31820', '0.00000', '0.00000', '0.00000', '0.20880', '0.00000', '0.00000', '0.00000', '0.27850', '0.08950', '0.00000', '0.34820', '0.02980', '0.00000', '0.08950', '0.00000', '0.00000', '0.00000', '0.00000', '0.28850', '0.00000', '0.00000', '0.00000', '0.00000', '0.49680', '0.18890', '0.00000', '0.00000', '0.15910', '0.32830', '0.00000', '0.47740', '0.08960', '0.46740', '0.21890', '0.35800', '0.11940', '0.00000', '0.00000', '0.04970', '0.00000', '0.15900', '0.62670', '0.35810', '0.00000', '0.00000', '0.72620', '0.09940', '0.40780', '0.22890', '0.06950', '0.17910', '0.00000', '0.22870', '0.28850', '0.00000', '0.00000', '0.15930', '0.18920', '0.00000', '0.42820', '0.00000', '0.06960', '0.14950', '0.00000', '0.00000', '0.01990', '0.17930', '0.00000', '0.00000', '0.22900', '0.14940', '0.14930', '0.56770', '0.26880', '0.00000', '0.00000', '0.21910', '0.30870', '0.00000', '0.20910', '0.07970', '0.00000', '0.00000', '0.69710', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.99570', '0.58760', '0.26870', '0.00000', '0.00000', '0.00000', '0.30860', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.80660', '0.31870', '0.09950', '0.25890', '0.03000', '0.48780', '0.00000', '0.00000', '0.00000', '0.42820', '0.20910', '0.41820', '0.69700', '0.52770', '0.36850', '0.03990', '0.24890', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.54720', '0.63850', '0.36920', '0.24940', '0.39910', '0.46890', '0.30930', '0.00000', '0.00000', '0.00000', '0.44890', '0.49890', '0.21950', '0.11970', '0.35910', '0.25940', '0.00000', '0.00000', '0.00000', '0.69840', '0.00000', '0.28930', '0.00000', '0.00000', '0.33920', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.66840', '0.03990', '0.00000', '0.00000', '0.30930', '0.00000', '0.00000', '0.05980', '0.00000', '0.08980', '0.00000', '1.05760', '0.36910', '0.73830', '0.00990', '0.41910', '0.24940', '0.00000', '0.69830', '0.32930', '0.09970', '0.17960', '0.27170', '0.79000', '0.24000', '0.00000', '0.13900', '0.53000', '0.06000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.71000', '0.00000', '0.00000', '0.33000', '0.15000', '0.00000', '0.54000', '0.00000', '0.86000', '0.22000', '0.00000', '0.27000', '0.14010', '0.00000', '0.54000', '0.00000', '0.08000', '0.22000', '0.04000', '0.26000', '0.18000', '0.00000', '0.82140', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.00000', '0.92000', '0.00000', '0.32000', '0.00000', '0.80000', '0.00000', '0.00000', '0.00000', '0.72450', '0.35000', '0.13000', '0.01000', '0.57000', '0.00000', '0.29000', '0.11000', '0.19000', '0.00000', '0.00000', '0.00000', '0.02000', '0.00000', '0.13000', '0.07000', '0.00000', '0.00000', '0.06000', '0.00000', '0.00000', '0.00000', '1.07000', '0.00000', '0.21000', '0.20000', '0.00000', '0.13000', '0.18000', '0.20000', '0.17000', '0.29000', '0.21000', '0.00000', '0.00000', '0.14000', '0.00000', '0.09000', '0.43000', '0.37000', '0.00000', '0.00000', '1.02000', '0.00000', '0.00000', '0.28000', '0.55000', '0.10000', '0.05000']
    let output14 = ['NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', '0.8999000000', '0.8356214286', '0.7759341837', '0.7205103134', '1.2428452910', '1.7473706274', '2.3842584397', '2.2929542654', '2.2678718179', '2.4520809738', '3.1373323328', '2.9132371662', '2.7051487972', '3.4136238831', '3.1697936057', '2.9433797767', '3.1394383641', '2.9151927667', '2.7069647119', '3.1379100896', '2.9137736547', '4.0829469650', '3.9200078961', '3.6400073321', '3.3800068084', '3.3664777506', '3.9781150542', '3.7532639789', '3.4851736947', '3.2362327165', '3.9957732367', '3.7797608627', '3.5097779439', '3.2590795193', '3.8090881251', '3.5370104019', '4.0669668017', '3.9054691731', '3.6265070893', '3.8528708686', '4.0731658066', '3.7822253918', '4.0569664352', '3.7671831184', '3.7756986100', '3.5060058521', '3.2555768627', '3.0230356582', '2.8071045398', '2.6065970726', '2.4700115675', '2.4122821698', '2.6958763005', '2.9589137076', '3.0448627285', '2.8273725336', '2.6254173526', '3.2897875417', '3.4115027173', '3.1678239518', '3.3676508124', '4.1179043258', '4.1108683025', '3.8172348523', '3.9605752200', '3.9652769900', '3.6820429193', '3.6369398536', '3.3771584355', '3.1855328330', '2.9579947735', '2.7467094325', '2.5505159016', '2.3683361944', '2.1991693233', '2.3835858002', '2.2133296717', '2.0552346951', '2.5136322169', '2.8201870585', '2.7575451258', '2.8084776168', '2.6078720727', '2.5304954961', '2.3497458178', '2.1819068308', '2.0260563429', '1.8813380327', '1.8857567447', '1.8800598343', '2.2020698462', '2.2332791429', '3.2045592041', '3.4815621181', '3.3618791096', '3.5482448875', '3.4733988241', '3.7311989081', '4.2581847004', '3.9540286504', '3.7113980325', '3.6247981730', '3.3658840178', '3.8694637308', '3.5930734643', '3.5426253597', '3.4183806912', '3.1742106418', '2.9474813103', '2.8758469310', '2.6704292930', '2.4796843435', '3.0167640333', '2.8012808880', '2.6011893960', '2.4153901535', '2.3421622854', '2.4624649793', '2.7230746236', '3.0444692933', '3.0352072010', '3.0069066866', '2.7921276376', '2.5926899492', '3.0125978099', '2.7974122521', '2.5975970912', '2.4120544419', '2.3391648389', '2.9754816361', '3.1597472335', '3.4399510025', '3.4322402166', '3.2764802012', '3.1316459011', '3.1460569082', '3.4470385576', '3.3794215177', '3.1390342665', '2.9943175332', '2.9095377094', '3.0393135873', '2.8222197596', '2.6206326339', '2.9994445886', '2.7851985466', '2.5862557933', '2.4015232366', '2.2299858626', '2.2196011581', '2.7958582182', '2.5961540598', '2.9468144841', '2.7363277352', '2.8586757541', '2.6544846288', '3.0039785839', '2.7894086851', '2.5901652076', '2.6831534070', '2.6800995922', '2.8462639071', '2.6429593423', '2.6924765321', '2.5001567798', '2.3215741527', '2.1557474275', '2.0017654684', '1.8587822207', '1.7260120620', '1.6027254862', '2.0344450943', '2.4153275876', '2.4911041885', '3.1768681750', '3.1997490196', '3.3370955182', '3.0987315526', '2.8773935846', '3.1782654714', '2.9512465092', '2.7404431871', '2.5446972452', '2.3629331562', '3.0381522165', '2.8211413439', '2.6892312479', '2.4971433016', '2.3187759229', '2.8285490713', '2.8150098519', '2.6139377196', '2.6555278825', '2.4658473195', '2.2897153681', '2.2453642704', '2.5018811082', '2.3231753148', '2.1672342208', '2.0819317765', '1.9629223639', '1.8227136236', '2.0390197934', '2.5398755224', '2.5175558422', '2.6162304249', '2.8372568231', '2.9527956215', '2.7418816485', '2.5460329593', '2.3641734623', '2.4041039292', '2.2323822200', '2.0729263471', '1.9248601795', '2.0658701667', '2.0078080119', '1.8643931539', '2.0794222144', '1.9606920562', '1.8206426236', '1.7800967219', '1.6529469561', '1.5348793163', '1.4252450795', '1.3234418595', '1.5174102981', '1.4090238482', '1.3083792877', '1.2149236242', '1.1281433654', '1.5443616964', '1.6229501467', '1.5070251362', '1.3993804836', '1.4585247348', '1.6826443966', '1.5624555111', '1.9282515460', '1.8801192927', '2.2132250576', '2.2740375534', '2.4696062996', '2.4126058496', '2.2402768604', '2.0802570846', '1.9813672929', '1.8398410577', '1.8674238393', '2.3607364222', '2.5502123920', '2.3680543640', '2.1989076237', '2.7680427935', '2.6697254511', '2.8868307760', '2.9095285777', '2.7712051079', '2.7523618859', '2.5557646083', '2.6019099934', '2.7045592796', '2.5113764739', '2.3319924401', '2.3247215515', '2.3478700121', '2.1801650113', '2.4526389390', '2.2774504434', '2.1843754117', '2.1778485966', '2.0222879825', '1.8778388409', '1.7636074952', '1.8169355312', '1.6871544218', '1.5666433917', '1.6837402923', '1.7128731286', '1.7398250480', '2.1832518302', '2.2961052709', '2.1320977516', '1.9798050550', '2.0574904083', '2.2192268077', '2.0607106071', '2.1226169923', '2.0507014929', '1.9042228148', '1.7682068995', '2.3390064066', '2.1719345205', '2.0167963404', '1.8727394590', '1.7389723548', '1.6147600437', '1.4994200406', '2.3880186091', '2.8050458513', '2.8733854334', '2.6681436167', '2.4775619298', '2.3005932205', '2.4448651333', '2.2702319095', '2.1080724874', '1.9574958812', '1.8176747468', '1.6878408363', '2.3738807766', '2.5230178640', '2.4423023023', '2.5267521378', '2.3762698423', '2.6943362821', '2.5018836905', '2.3231777126', '2.1572364474', '2.4313481298', '2.4667804062', '2.7087818058', '3.2122973911', '3.5105475774', '3.6282941790', '3.4090303091', '3.4144281442', '3.1705404196', '2.9440732468', '2.7337823006', '2.5385121362', '2.3571898408', '2.1888191379', '2.0324749137', '1.8872981342', '1.7524911246', '1.6273131871', '2.0582765309', '2.5497567787', '2.7368312945', '2.7907433449', '2.9905045345', '3.2457970678', '3.3232544201', '3.0858791044', '2.8654591683', '2.6607835135', '2.9196275482', '3.2099827233', '3.2001982431', '3.0913126543', '3.2296046076', '3.2583185642', '3.0255815239', '2.8094685579', '2.6087922323', '3.1208499300', '2.8979320779', '2.9802369295', '2.7673628631', '2.5696940871', '2.7253445095', '2.5306770445', '2.3499143985', '2.1820633700', '2.0262017007', '1.8814730078', '2.4154820787', '2.2828476445', '2.1197870985', '1.9683737343', '2.1370756104', '1.9844273525', '1.8426825416', '1.7708623601', '1.6443721915', '1.6167170350', '1.5012372468', '2.4516060148', '2.6455912995', '3.1949204924', '2.9766118858', '3.1830967511', '3.2051326974', '2.9761946476', '3.4619093157', '3.5439300788', '3.3904922160', '3.3279142006', '3.3619060434', '3.9117698975', '3.8723577619', '3.5957607789', '3.4779207233', '3.7594978145', '3.5509622563', '3.2973220952', '3.0617990884', '2.8430991535', '2.6400206425', '2.4514477395', '2.9863443295', '2.7730340203', '2.5749601617', '2.7210344358', '2.6766748333', '2.4854837738', '2.8479492185', '2.6445242743', '3.3156296833', '3.2987989916', '3.0631704922', '3.1143725999', '3.0320174142', '2.8154447418', '3.1543415459', '2.9290314355', '2.7998149044', '2.8198281255', '2.6584118308', '2.7285252715', '2.7136306092', '2.5197998514', '3.1612141478', '2.9354131372', '2.7257407703', '2.5310450010', '2.3502560723', '2.1823806386', '2.0264963073', '1.8817465710', '1.7473361017', '1.6225263801', '2.4266316387', '2.2533008073', '2.4123507497', '2.2400399818', '2.8800371260', '2.6743201884', '2.4832973178', '2.3059189380', '2.8657104424', '3.0110168394', '2.9259442080', '2.7269481931', '3.1021661793', '2.8805828808', '2.9648269608', '2.8630536064', '2.8485497774', '2.6450819361', '2.4561475121', '2.2807084041', '2.1378006610', '1.9851006138', '1.9733077128', '1.9023571619', '1.7664745074', '1.6402977569', '1.5831336314', '1.4700526577', '1.3650488965', '1.2675454039', '2.2470064465', '2.0865059860', '2.1474698441', '2.1940791410', '2.0373592023', '2.0218335450', '2.0574168632', '2.1104585159', '2.1297114790', '2.2675892305', '2.3156185712', '2.1502172447', '1.9966302986', '1.9940138487', '1.8515842881', '1.8093282675', '2.1100905341', '2.3293697817', '2.1629862259', '2.0084872097', '2.8850238376', '2.6789507063', '2.4875970845', '2.5899115784', '2.9549178943', '2.8438523304', '2.6907200211']
    let result1 = minus_dm(input['high'], input['low'], '1')
    let result14 = minus_dm(input['high'], input['low'], '14')
    it('Each properties should return an array', () => {
      assert.isTrue(Array.isArray(result1))
    })
    it('should return correct values', () => {
      for (let i = 0; i < input.length; i++) {
        assert.isTrue(result1[i].toFixed(5) === output1[i])
        assert.isTrue(result14[i].toFixed(14) === output14[i])
      }
    })
  })
}