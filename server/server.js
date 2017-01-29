'use strict'

const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const request = require('request')

const webpack = require('webpack')
const config = require('../webpack.config.js')
const WebpackDevServer = require('webpack-dev-server')

const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

require('dotenv').config()
const PORT = process.env.PORT || 3001
const ENV = process.env.NODE_ENV || 'development'

let app = express()
  .set('dbUrl', process.env.DEV_DB)
  .use(morgan('combined'))
  .use(express.static(path.join(__dirname, './public')))
  .get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
  })
  .use(bodyParser())
  .use(bodyParser.json())

// DB connection
function connect () {
  return mongoose.connect(app.get('dbUrl')).connection
}

// connect to database then listen
connect()
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', listen)

// Models
require('./api/Invite/invite.js')

// Routes
require('./api/Invite/routes.js')(app)


function listen () {
  new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    contentBase: './',
    proxy: {
      '*': 'http://localhost:3000'
    }
  }).listen(PORT, 'localhost', function (err) {
    err ? console.log(err) : console.log(`Listening at localhost:${PORT}`)
  })
  app.listen(3000)
}
