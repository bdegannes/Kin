import * as c from '../actions/constants'
import * as util from './utils'

const intialState = {
  personal: {},
  spouse: util.noop,
  children: util.noop,
  parents: {}
}

export default (state = intialState, action) => {
  switch (action.type) {

    case c.FORM_UPDATE_DEMOGRAPHICS:
      return Object.assign({}, state, {personal: action.payload})

    case c.FORM_UPDATE_PERSONAL:
      const { personal } = state
      let personalInfo = Object.assign({}, personal, action.payload)
      return Object.assign({}, state, {personal: personalInfo})

    case c.FORM_UPDATE_SPOUSE:
      return Object.assign({}, state, {spouse: action.payload})

    case c.FORM_UPDATE_CHILDREN:
      return Object.assign({}, state, {children: action.payload})

    case c.FORM_UPDATE_PARENT:
      return Object.assign({}, state, {parents: action.payload})

    default:
      return state

  }
}
