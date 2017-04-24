var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './demo/index.jsx',
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader','sass-loader'],
                publicPath: path.resolve(__dirname)
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true
        })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname),
    stats: "errors-only"
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};