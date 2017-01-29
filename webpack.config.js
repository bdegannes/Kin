const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080
// const PROXY = `http://${HOST}:${PORT}`
console.log(PORT)

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'public/bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    })
  //   new BrowserSyncPlugin({
  //     host: HOST,
  //     port: PORT,
  //     proxy: PROXY
  //   }, {
  //    // prevent BrowserSync from reloading the page
  //    // and let Webpack Dev Server take care of this
  //     reload: false
  //   }
  // )
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /(\.js$)|(\.jsx$)/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.json$/,
        loaders: ['json']
      }, {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style?sourceMap', 'css?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url!sass?sourceMap')
      }, {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  preLoaders: [
    {
      test: /\.js$/,
      loader: 'source-map-loader'
    }
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, './client/sass')]
  },
  postcss: [autoprefixer],
  resolve: {
    extensions: ['', 'css', 'scss', 'json', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    inline: true,
    port: PORT,
    host: 'localhost'
  }
}
