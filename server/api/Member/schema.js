module.exports = {
  givenName: { type: String, default: '', isRequired: true },
  familyName: { type: String, default: '' },
  maidenName: { type: String, default: '' },
  dateOfBirth: { type: Date },
  location: { type: Number },
  death: { type: Date, default: null },
  spouse: { type: String },
  family_ID: { type: String },
  sex: '',
  parent: [],
  ancestor: []
}
