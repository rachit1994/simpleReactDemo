import { createSelector } from 'reselect';

const getMessage = state => state.get('errorMessage');

// Get message for all error, warning and success
const getAlertMessage = () =>
  createSelector(getMessage, error => {
    if (error && error.get('error')) {
      return error.get('error');
    } else {
      return {};
    }
  });
// get Boolean value true or false for show or hide snackbar respectively
const isOpen = () =>
  createSelector(getMessage, isOpen => {
    if (isOpen && isOpen.get('isOpen')) {
      return isOpen.get('isOpen');
    } else {
      return false;
    }
  });

export { getMessage, getAlertMessage, isOpen };
