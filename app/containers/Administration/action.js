import { SET_FIELDS } from './constants';

export function setFields(value) {
  return {
    type: SET_FIELDS,
    value
  };
}
