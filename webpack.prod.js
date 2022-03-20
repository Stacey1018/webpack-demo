const {merge} = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base,{
    mode:'production',
    // performance: {
    //     hints: 'error', 
    //     maxAssetSize: 300000, // 整数类型（以字节为单位）
    //     maxEntrypointSize: 500000 // 整数类型（以字节为单位）
    //   },
})