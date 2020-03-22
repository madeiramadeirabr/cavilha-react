const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./base')
const webpackCommon = require('./common')

const DefinePlugin = require('webpack/lib/DefinePlugin')
const TerserPlugin = require('terser-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = webpackMerge(webpackBase, webpackCommon, {
  mode: 'production',
  bail: true,
  devtool: "source-map",
  entry: {
    index: path.join(__dirname, '../../src', 'index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'bundle.js'
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
    new CleanWebpackPlugin(),
    new DuplicatePackageCheckerPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    })
  ]
})