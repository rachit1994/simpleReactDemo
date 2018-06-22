import { createSelector } from 'reselect';

const getState = state => state.get('login');

const getContact = () =>
  createSelector(getState, data => {
    // let select = ['field'];
    // select.push(field);
    if (data && data.get('field')) {
      return data.get('field').toJS();
    } else {
      return [];
    }
  });

const getContactError = (field) =>
  createSelector(getState, error => {
    return error.get('error').toJS();
  });

export { getState, getContact, getContactError };
