var path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: [
      './js/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'all.js',
    sourceMapFilename: 'all.js.map'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file'
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: '3000',
    stats: {
      colors: true,
      chunks: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: './assets',
        to: './assets'
      }
    ])
  ]
};
