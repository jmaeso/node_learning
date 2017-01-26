var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },

  context: __dirname + '/app',
  entry: ['./app.js'],

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build/'
  },

  target: 'electron-renderer'
};
