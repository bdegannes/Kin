const Invite = require('./invite.ctrl')
const hpr = require('../utils/helpers')

module.exports = function (app) {
  app.post('/api/request/invite', function (req, res) {
    return Invite.genInviteCode(hpr.configHandler(200, 400, res))
  })

  app.get('/api/validate/:invite', function (req, res) {
    return Invite.codeValidation(req.params, hpr.configHandler(200, 400, res))
  })
}
