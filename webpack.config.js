const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },

  performance: {
    hints: 'error', 
    maxAssetSize: 300000, // 整数类型（以字节为单位）
    maxEntrypointSize: 500000 // 整数类型（以字节为单位）
  },
  
};