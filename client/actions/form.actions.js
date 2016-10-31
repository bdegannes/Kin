import * as c from './constants'

export const updateDemographics = (payload) => ({
  type: c.FORM_UPDATE_DEMOGRAPHICS,
  payload
})

export const updatePersonal = (payload) => ({
  type: c.FORM_UPDATE_PERSONAL,
  payload
})

export const updateSpouse = (payload) => ({
  type: c.FORM_UPDATE_SPOUSE,
  payload
})

export const updateChildren = (payload) => ({
  type: c.FORM_UPDATE_CHILDREN,
  payload
})

export const updateParent = (payload) => ({
  type: c.FORM_UPDATE_PARENT,
  payload
})

export const submitForm = () => ({
  type: c.FORM_SUBMIT
})
