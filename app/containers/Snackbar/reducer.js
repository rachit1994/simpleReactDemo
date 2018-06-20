import { fromJS } from 'immutable';

import { ALERT_MESSAGE, IS_OPEN_ALERT } from './constants';

// The initial state of the App
const initialState = fromJS({
  isOpen: false,
  error: ''
});

const errorMessage = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_MESSAGE:
      return state.set('error', action.err);
      break;
    case IS_OPEN_ALERT:
      return state.set('isOpen', action.isOpen);
      break;
    default:
      return state;
      break;
  }
};

export default errorMessage;
