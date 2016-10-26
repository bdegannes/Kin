import * as c from '../actions/constants'

const intialState = {
  values: {}
}

export default function (state = intialState, action) {
  switch (action.type) {

    case c.FORM_UPDATE_VALUE:
      return Object.assign({}, state, {
        values: Object.assign({}, state.values, {
          [action.name]: action.value
        })
      })

    default:
      return state

  }
};
