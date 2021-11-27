var path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    ],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname),
    },
    // compress: true,
    port: 8080,
  },
  watch: true,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
  },

};