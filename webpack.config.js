const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const buildFolder = 'dist';

module.exports = {
  entry: './web/index.js',
  output: {
    path: path.resolve(__dirname, buildFolder),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
