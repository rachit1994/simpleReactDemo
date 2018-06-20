import { createSelector } from 'reselect';

const getState = state => state.get('administration');

const getTable = () =>
  createSelector(getState, data => {
    if (data && data.get('table')) {
      return data.get('table').toJS();
    } else {
      return [];
    }
  });

export { getState, getTable };
