var express = require('express')
var path = require('path')
// var bodyParser = require('body-parser')
var morgan = require('morgan')
// var request = require('request')
var webpack = require('webpack')
var config = require('../webpack.config.js')
var WebpackDevServer = require('webpack-dev-server')

var app = express()
var port = process.env.PORT || 3000

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, '/../')))

new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:3000'
  }
}).listen(3001, 'localhost', function (err) {
  err ? console.log(err) : console.log('Listening at localhost:3001')
})

app.listen(port)
