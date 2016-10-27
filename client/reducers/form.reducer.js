import * as c from '../actions/constants'

const intialState = {}

export default (state = intialState, action) => {
  switch (action.type) {

    case c.FORM_UPDATE_DEMOGRAPHICS:
      const { location, married } = action.data
      return Object.assign({}, state, {
        location: location,
        married: married
      })

    case c.FORM_UPDATE_PERSONAL:
      const { given_name, family_name, birth, gender, maiden_name } = action.data
      return Object.assign({}, state, {
        given_name: given_name,
        family_name: family_name,
        birth: birth,
        gender: gender,
        maiden_name: maiden_name
      })

    case c.FORM_UPDATE_SPOUSE:
      return Object.assign({}, state, {
        values: Object.assign({}, state.values, {
          [action.name]: action.value
        })
      })

    case c.FORM_UPDATE_CHILDREN:
      return Object.assign({}, state, {
        values: Object.assign({}, state.values, {
          [action.name]: action.value
        })
      })

    case c.FORM_UPDATE_PARENT:
      return Object.assign({}, state, {
        values: Object.assign({}, state.values, {
          [action.name]: action.value
        })
      })

    default:
      return state

  }
}
