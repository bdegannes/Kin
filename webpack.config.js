const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    './client/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'public/bundle.js',
  },
  plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new ExtractTextPlugin("public/style.css")
  ],
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /(\.js$)|(\.jsx$)/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.json$/,
        loaders: ['json'],
      }, {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css?sourceMap!sass?sourceMap"
        })
      }, {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      }, {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', 'scss', 'json', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost',
  },
};
