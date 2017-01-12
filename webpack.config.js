var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './main.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  target: 'electron-main',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
