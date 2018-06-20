import { fromJS } from 'immutable';

import { SET_USER_DETAILS } from './constants';

// The initial state of the App
const initialState = fromJS({
  user: {
    email: ''
  }
});

function signedInUserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DETAILS:
      return state.setIn(['user', 'email'], action.value.email)
    default:
      return state;
      break;
  }
}

export default signedInUserReducer;
