import * as c from '../actions/constants'

const intialState = {
  values: {}
}

export default (state = intialState, action) => {
  switch (action.type) {

    case c.VALIDATE_KIN_ID:
      return Object.assign({}, state, {
        values: Object.assign({}, state.values, {
          [action.name]: action.value
        })
      })

    default:
      return state

  }
}
