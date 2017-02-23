var path = require('path')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    Index: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/dev-server',
      'mocha!./test.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'test'),
    filename: 'test.js'
  },
  resolve: {
    alias: {
      'ta-lib.aroon': path.join(__dirname, './ta-lib.aroon/'),
      'ta-lib.ema': path.join(__dirname, './ta-lib.ema/'),
      'ta-lib.max': path.join(__dirname, './ta-lib.max/'),
      'ta-lib.min': path.join(__dirname, './ta-lib.min/'),
      'ta-lib.sma': path.join(__dirname, './ta-lib.sma/'),
      'ta-lib.sum': path.join(__dirname, './ta-lib.sum/'),
      'ta-lib.minus_dm': path.join(__dirname, './ta-lib.minus_dm/'),
      'ta-lib.average': path.join(__dirname, './ta-lib.average/'),
      'ta-lib.stddev': path.join(__dirname, './ta-lib.stddev/'),
      'ta-lib.eratio': path.join(__dirname, './ta-lib.eratio/'),
      'ta-lib.trange': path.join(__dirname, './ta-lib.trange/')
    },
    extensions: ["", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loaders: ['babel']
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:3002/test'
    })
  ]
}
