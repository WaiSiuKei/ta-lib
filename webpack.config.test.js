var path = require('path')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  cache: true,
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
