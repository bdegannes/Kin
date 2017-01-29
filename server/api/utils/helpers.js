const codeToken = require('rand-token').uid

const bcrypt = require('bcrypt')
const saltRounds = 10

const Promise = require('bluebird')
function wrap (genFn) {
  var cr = Promise.coroutine(genFn)
  return function (req, res, next) {
    cr(req, res, next).catch(next)
  }
}

function configHandler (successCode, failCode, res) {
  return function (err, data) {
    if (err) {
      res.status(failCode).send(err)
    } else {
      res.status(successCode).send(data)
    }
  }
}

function generateCode () {
  const token = codeToken(6)
  return token
}

function hashSecrets (self, secret, next) {
  return bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) throw err
    bcrypt.hash(secret, salt, function (err, hash) {
      if (err) throw err
      self.code = hash
      next()
    })
  })
}

function updateDate (self) {
  const currentDate = new Date()
  self.updated_at = currentDate

  if (!self.created_at) self.created_at = currentDate
}

module.exports = {
  configHandler: configHandler,
  generateCode: generateCode,
  hashSecrets: hashSecrets,
  updateDate: updateDate,
  wrap: wrap

}
