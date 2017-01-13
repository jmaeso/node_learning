var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  context: __dirname + '/app',
  entry: ['./something.js'],

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  target: 'electron'
};
