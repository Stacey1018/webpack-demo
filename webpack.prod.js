const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = merge(base, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({ title: 'demo' })],
})
