const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackCommon = require('./common')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
const DefinePlugin = require('webpack/lib/DefinePlugin')

module.exports = webpackMerge(webpackCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true,
    hot: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ]
})
