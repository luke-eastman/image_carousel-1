const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/Client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '/Client'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',"@babel/preset-react"]
          }
        }
      }
    ]
  },
  mode: 'development'
};