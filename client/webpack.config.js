const path =require('path');

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "./node_modules"),
          path.resolve(__dirname, "./build")
        ]
      }
    ]
  }
};

module.exports = config;
