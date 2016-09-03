import { CHANGEME } from '../actions/sample';

const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'CHANGEME') {
    return action.payload.data;
  }

  return state;
};
