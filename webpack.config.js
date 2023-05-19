const path = require("path");

module.exports = {
  entry: {
    itadakimeshi: './src/scripts/idatakimeshi.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/js/special'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
