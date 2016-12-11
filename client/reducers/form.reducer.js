import * as c from '../actions/constants'
// import * as util from './utils'

const intialState = {
  personal: {},
  spouse: {},
  children: {},
  parents: {
    mother: {},
    father: {}
  }
}

export default (state = intialState, action) => {
  switch (action.type) {

    case c.FORM_UPDATE_DEMOGRAPHICS:
      let children = {}
      for (var i = 0; i < action.payload.children; i++) {
        if (!children.hasOwnProperty(i + 1)) {
          children[i + 1] = {}
        }
      }
      let personalDemo = {...state.personal, ...action.payload}
      return {...state, ...{personal: personalDemo}, ...{children}}

    case c.FORM_UPDATE_PERSONAL:
      let personalInfo = {...state.personal, ...action.payload}
      return {...state, ...{personal: personalInfo}}

    case c.FORM_UPDATE_SPOUSE:
      return {...state, ...{spouse: action.payload}}

    case c.FORM_UPDATE_CHILDREN:
      let child = {...state.children, ...action.payload}
      return {...state, ...{children: child}}

    case c.FORM_UPDATE_PARENT:
      let parent = {...state.parents, ...action.payload}
      return {...state, ...{parents: parent}}

    default:
      return state
  }
}
