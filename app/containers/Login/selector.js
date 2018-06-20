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
    let select = ['field'];
    select.push(field);
    return error.getIn(select);
  });

export { getState, getContact, getContactError };
