const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: 'demo', template: './public/index.html' }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // // 避免在公共区域重复编译依赖
    // new webpack.DllReferencePlugin({
    //   context: process.cwd(),
    //   manifest: require(`./public/vendor/react-manifest.json`),
    // }),
    // new webpack.DllReferencePlugin({
    //   context: process.cwd(),
    //   manifest: require(`./public/vendor/antd-manifest.json`),
    // }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // MiniCssExtractPlugin.loader
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    filename: 'bundle.js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
    splitChunks: {
      // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
      chunks: 'all',
      // 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。
      minSize: 30000,
      // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
      minChunks: 1,
      // 表示按需加载文件时，并行请求的最大数目。默认为5。
      maxAsyncRequests: 5,
      // 表示加载入口文件时，并行请求的最大数目。默认为3。
      maxInitialRequests: 3,
      // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
      automaticNameDelimiter: '~',
      // 设置chunk的文件名。默认为true。当为true时，splitChunks基于chunk和cacheGroups的key自动命名。
      name: true,
      // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。默认将所有来自 node_modules目录的模块打包至vendors组，将两个以上的chunk所共享的模块打包至default组。
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        //
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },

        // vendors: {
        //   name: `chunk-vendors`,
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10,
        //   chunks: 'initial',
        // },
        // dll: {
        //   name: `chunk-dll`,
        //   test: /[\\/]antd[\\/]/,
        //   priority: 15,
        //   chunks: 'all',
        //   reuseExistingChunk: true,
        // },
        // common: {
        //   name: `chunk-common`,
        //   minChunks: 2,
        //   priority: -20,
        //   chunks: 'all',
        //   reuseExistingChunk: true,
        // },
      },
    },
  },
}
