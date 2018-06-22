// imports files from local file system
import { SET_FIELDS, SET_ERROR, CALL_API, CALL_SUCCESS, CALL_ERROR } from './constants';

export function setFields(field, value) {
  return {
    type: SET_FIELDS,
    field, value
  };
}

export function setError(field, error) {
  return {
    type: SET_ERROR,
    field, error
  };
}

export function callAPI(obj) {
  return {
    type: CALL_API,
    obj
  }
}

export function callSuccess() {
  return {
    type: CALL_SUCCESS
  }
}

export function callError() {
  return {
    type: CALL_ERROR
  }
}