const path = require('path')
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },
  plugins: [
    new CleanTerminalPlugin(),
    new NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ]
}