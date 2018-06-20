import { fromJS } from 'immutable';

import { SET_FIELDS } from './constants';

// The initial state of the App
const initialState = fromJS({
  table: []
});

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIELDS:
      return state.update('table', value => value.push(action.value))
    default:
      return state;
      break;
  }
}

export default contactReducer;
