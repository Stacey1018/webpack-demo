const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 3000,
  },
  plugins: [new ESLintWebpackPlugin()],
})
