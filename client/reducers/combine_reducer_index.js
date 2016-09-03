import { combineReducers } from 'redux';
import first from './first_reducer'

const rootReducer = combineReducers({
  first: first
});

export default rootReducer;
