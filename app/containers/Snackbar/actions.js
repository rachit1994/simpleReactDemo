// imports files from local file system
import { ALERT_MESSAGE, IS_OPEN_ALERT } from './constants';

/*
	To set error message comes from Api Request
	@err: String (error message)
*/
export function setAlertMessage(err) {
  return {
    type: ALERT_MESSAGE,
    err
  };
}

/*
	To set value for snack bar's shows or hide
	@isOpen: Boolean (true/false)
*/
export function isOpenAlert(isOpen) {
  return {
    type: IS_OPEN_ALERT,
    isOpen
  };
}
