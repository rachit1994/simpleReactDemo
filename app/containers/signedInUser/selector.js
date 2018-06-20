import { createSelector } from 'reselect';

const getState = state => state.get('signedInUser');

const getUser = () =>
  createSelector(getState, data => {
    // let select = ['field'];
    // select.push(field);
    if (data && data.get('user')) {
      return data.get('user').toJS();
    } else {
      return [];
    }
  });

export { getState, getUser };
