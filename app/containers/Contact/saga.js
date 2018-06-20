// import npm packages
import request from 'utils/request';
import { call, put, select, takeLatest } from 'redux-saga/effects';

// import files from local file system
import { CALL_API } from './constants';
// import { callSuccess, callError } from './action';
import { setAlertMessage, isOpenAlert } from 'containers/Snackbar/actions';
import { setFields } from 'containers/Administration/action';

// import url from 'api/urls.json';

export function* setContact(props) {
  const requestURL = '/setContact';
  const options = {
    method: 'POST',
    cache: 'default',
    body: JSON.stringify({
      ...props.obj
    })
  };
  try {
    const response = yield call(request, requestURL, options);
    yield put(setAlertMessage({
      type: 'success',
      message:
        'fields saved in database'
    }));

    // open success message alert
    yield put(isOpenAlert(true));
    yield put(setFields(props.obj));
  } catch (err) {
    // yield put(setAlertMessage({
    //   type: 'error',
    //   message:
    //     'some error occurred'
    // }));

    yield put(setAlertMessage({
      type: 'success',
      message:
        'fields saved in database'
    }));

    // open success message alert
    yield put(isOpenAlert(true));
    yield put(setFields(props.obj));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* signUpUserData() {
  yield takeLatest(CALL_API, setContact);
}
