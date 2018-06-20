import { fromJS } from 'immutable';

import { SET_FIELDS, SET_ERROR, CALL_SUCCESS, CALL_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  user: [],
  field: {
    email: '',
    password: ''
  },
  error: {
    email: '',
    password: ''
  },
  callSuccess: null,
  callError: false
});

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIELDS:
      let field = ['field'];
      field.push(action.field);
      return state.setIn(field, action.value);
    case SET_ERROR:
      let error = ['error'];
      error.push(action.field);
      return state.setIn(error, action.error);
    case CALL_SUCCESS:
      return state.set('callSuccess', true);
    case CALL_ERROR:
      return state.set('callError', true);
    default:
      return state;
      break;
  }
}

export default contactReducer;
