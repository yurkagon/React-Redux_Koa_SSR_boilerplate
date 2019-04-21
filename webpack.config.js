const path = require('path');

module.exports = {
  entry: {
    client: './web/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // module: {
  //   rules: [
  //     { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  //   ]
  // }
}
