const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./base')

const DefinePlugin = require('webpack/lib/DefinePlugin')
const TerserPlugin = require('terser-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")

module.exports = webpackMerge(webpackBase, {
  mode: 'production',
  bail: true,
  devtool: "source-map",
  entry: {
    button: path.join(__dirname, '../../src/components/button', 'index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../../components'),
    filename: '[name].js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          compress: {
            drop_console: true
          },
        },
      }),
    ],
    runtimeChunk: false,
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new DuplicatePackageCheckerPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
})