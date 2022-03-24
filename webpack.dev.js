const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')

const webpack = require('webpack')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 3000,
  },
})
