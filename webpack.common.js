const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.jsx', '.js', '.scss'],
  },
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: [/node_modules/],
      query: {
        presets: ['es2015', 'react'],
      },
    },
    {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      options: {
        extract: false,
        symbolId: '[folder]-[name]',
      },
    },
    ],
  },
};
