const {merge} = require('webpack-merge')
const base = require('./webpack.config.js')

module.exports = merge(base,{
    mode:'development',
    devServer: {
        // contentBase: path.join(__dirname, "public/"),
        port: 3000,
        // publicPath: "http://localhost:3000/dist/",
        // hotOnly: true
        hot:true
      },
      
    plugins: [new webpack.HotModuleReplacementPlugin()]

})