const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../public/dist/'),
    filename: 'bundle.js',
    'publicPath': '/dist/'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015'],
      },
    }],
  },
  devServer: {
    contentBase: path.join(__dirname, '../public/'),
    compress: true,
    port: 1337,
    clientLogLevel: 'none',
  },
  devtool: 'eval',
};