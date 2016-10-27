import * as c from './constants'

export const updateDemographics = (data) => {
  return {
    type: c.FORM_UPDATE_DEMOGRAPHICS,
    data
  }
}

export const updatePersonal = (data) => ({
  type: c.FORM_UPDATE_PERSONAL,
  data
})

export const updateSpouse = (data) => ({
  type: c.FORM_UPDATE_SPOUSE,
  data
})

export const updateChildren = (data) => ({
  type: c.FORM_UPDATE_CHILDREN,
  data
})

export const updateParent = (data) => ({
  type: c.FORM_UPDATE_PARENT,
  data
})
