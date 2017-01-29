const InviteCode = require('./invite')
const hpr = require('../utils/helpers')

function genInviteCode (cb) {
  const code = hpr.generateCode()
  const newInvitation = new InviteCode({
    code: code,
    redeemed: 0,
    usedBy: []
  })

  newInvitation.save(function (err, newInvitation) {
    return cb(err, code)
  })
}

function codeValidation (req, cb) {
  
}

module.exports = {
  genInviteCode: genInviteCode,
  codeValidation: codeValidation
}
