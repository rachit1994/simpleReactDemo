// imports files from local file system
import { SET_USER_DETAILS } from './constants';

export function setUserDetails(value) {
  return {
    type: SET_USER_DETAILS,
    value
  };
}
