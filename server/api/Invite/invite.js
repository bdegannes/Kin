
const hpr = require('../utils/helpers')
const mongoose = require('mongoose')
const InviteCode = require('./schema')
const Schema = mongoose.Schema

const InviteSchema = new Schema(InviteCode)

InviteSchema.pre('save', function (next) {
  hpr.hashSecrets(this, this.code, next)
})

module.exports = mongoose.model('InviteCode', InviteSchema)
