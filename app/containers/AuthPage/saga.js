import { LOCATION_CHANGE } from 'react-router-redux';
import { all, call, fork, takeLatest, select, take, cancel } from 'redux-saga/effects';
import { set } from 'lodash';
import { history } from 'app';

// Utils
import auth from 'utils/auth';
import request from 'utils/request';

import { makeSelectFormType, makeSelectModifiedData } from './selectors';
import { SUBMIT } from './constants';

export function* submitForm() {
  try {
    const formType = yield select(makeSelectFormType());
    const body = yield select(makeSelectModifiedData());
    let requestURL;

    switch (formType) {
      case 'login':
        requestURL = '/auth/local';
        break;
      case 'register':
        requestURL = '/auth/local/register';
        break;
      case 'reset-password':
        requestURL = '/auth/reset-password';
        break;
      case 'forgot-password':
        requestURL = '/auth/forgot-password';
        set(body, 'url', '/auth/reset-password');
        break;
      default:

    }

    const response = yield call(request, requestURL, { method: 'POST', body });

    if (response.jwt) {
      // Set the user's credentials
      yield all([
        call(auth.setToken, response.jwt, body.rememberMe),
        call(auth.setUserInfo, response.user, body.rememberMe),
      ]);
      // TODO: 如果用户处于非登陆表单提交时，是否也进入首页
      yield call(forwardTo, '/user/home');
      const submitWatcher = yield fork(takeLatest, SUBMIT, submitForm);
      yield cancel(submitWatcher);
    }
  } catch (error) {
    console.log(error.response.payload.message);
  }
}

export default function* defaultSaga() {
  yield fork(takeLatest, SUBMIT, submitForm);
  yield take(LOCATION_CHANGE);
}

/**
 * Helper to handle navigation from sagas.
 * @param  {Sting} location The path to navigate
 */
function forwardTo(location) {
  history.push(location);
}
