import * as c from './constants'

export function update (value) {
  return {
    type: c.FORM_UPDATE_VALUE,
    value
  }
}
