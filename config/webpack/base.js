const path = require('path')
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  entry: {
    index: path.join(__dirname, '../../example')
  },
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 4,
                includePaths: [require('path').resolve(__dirname, '../../node_modules')],
              },
            }
          },
        ],
      }
    ]
  },
  plugins: [
    new CleanTerminalPlugin(),
    new NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ]
}
