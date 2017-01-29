module.exports = {
  code: { type: String, unique: true, default: '', isRequired: true },
  redeemed: {type: Number},
  usedBy: [{member: String}]
}

// store date usedBy
