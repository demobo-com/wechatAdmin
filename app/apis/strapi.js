import request from 'utils/request';
import { message } from 'antd';
import {
  getErrorMessage,
  getUserLocationName,
  getStartOf,
} from 'utils/helpers';
// import moment from 'moment';
import _ from 'lodash';

const STRAPI_BASE = '';

function reportFetchError(err, isAlert) {
  if (isAlert) message.error(getErrorMessage(err), 10);
  return Promise.reject(err);
}
function requestWithAlert(url, options, isAlert = true, type = 'error') {
  return request(url, options).catch((err) =>
    reportFetchError(err, isAlert, type),
  );
}

// Note: endpoint is singular and all small case, endpoint can include url parameters
export function getStrapi(
  endpoint,
  headers = {},
  isAlert = true,
  type = 'warning',
) {
  const url = `${STRAPI_BASE}/${endpoint}`;
  return requestWithAlert(
    url,
    {
      method: 'GET',
      headers,
    },
    isAlert,
    type,
  );
}
export function createStrapi(endpoint, body, headers = {}, isAlert, type) {
  const url = `${STRAPI_BASE}/${endpoint}`;
  return requestWithAlert(
    url,
    {
      method: 'POST',
      headers,
      body,
    },
    isAlert,
    type,
  );
}
export function updateStrapi(endpoint, body, headers = {}, isAlert, type) {
  const url = `${STRAPI_BASE}/${endpoint}`;
  return requestWithAlert(
    url,
    {
      method: 'PUT',
      headers,
      body,
    },
    isAlert,
    type,
  );
}
export function deleteStrapi(endpoint, headers = {}, isAlert, type) {
  const url = `${STRAPI_BASE}/${endpoint}`;
  return requestWithAlert(
    url,
    {
      method: 'DELETE',
      headers,
    },
    isAlert,
    type,
  );
}

export function loadForm(path) {
  return getStrapi(path);
}
export function updateForm(formObject, path) {
  return updateStrapi(path, formObject);
}
export function setForm(formObject, path) {
  return createStrapi(path, formObject);
}

export function signInWithEmailAndPassword(user) {
  const url = `${STRAPI_BASE}/auth/local`;
  return requestWithAlert(url, {
    method: 'POST',
    body: {
      identifier: user.email,
      password: user.password,
    },
  });
}
export function logInByJwtToken() {
  return getStrapi('user/me');
}
export function signUpAndSendEmailVerify(user) {
  const url = `${STRAPI_BASE}/auth/local/register`;
  return requestWithAlert(url, {
    method: 'POST',
    body: {
      country: user.country,

      companyName: user.companyName || null,
      firstName: user.firstName || null,
      lastName: user.lastName || null,

      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
    },
  });
}
// TODO: strapi does not have signout, may need a signout api in future
export function signOut() {
  // const url = `${STRAPI_BASE}/auth/local/signout`;
  // return request(url, {
  //   method: 'POST',
  // });
  return Promise.resolve();
}

export function forgetUserPassword(email) {
  const url = `${STRAPI_BASE}/auth/forgot-password`;
  return requestWithAlert(url, {
    method: 'POST',
    body: {
      email,
      url: `${window.location.origin}/forgetPassword/step3`, // TODO link
    },
  });
}
// TODO: strapi does not have changeUserPassword, use resetUserPassword for now
export function changeUserPassword(
  oldPassword,
  password,
  passwordConfirmation,
) {
  console.log(passwordConfirmation);
  // const url = `${STRAPI_BASE}/auth/change-password`;
  // return request(url, {
  //   method: 'POST',
  //   body: {
  //     oldPassword,
  //     password: newPassword,
  //     passwordConfirmation: newPassword,
  //   },
  // });
  return Promise.resolve();
}
export function resetUserPassword(code, password, passwordConfirmation) {
  const url = `${STRAPI_BASE}/auth/reset-password`;
  return requestWithAlert(url, {
    method: 'POST',
    body: {
      code,
      password,
      passwordConfirmation,
    },
  });
}

export function uploadProfileFile(authUserId, field, fileBuffer) {
  const body = new FormData();
  body.append('ref', 'Profile');
  body.append('refId', authUserId);
  body.append('field', field);
  body.append('files', fileBuffer);

  const url = `${STRAPI_BASE}/upload`;
  return requestWithAlert(url, {
    method: 'POST',
    body,
    isFormData: true,
  });
}
export function deleteProfileFile(fileId) {
  const url = `${STRAPI_BASE}/files/${fileId}`;
  return requestWithAlert(url, {
    method: 'DELETE',
  });
}

const delay = (resolve, result, time = 1000) =>
  setTimeout(() => resolve(result), time);

export function loadOrderByID(id) {
  return updateStrapi(`orders/${id}`);
}

export function getHandStrategy({ p1, p2, d1, removals }) {
  const removalsString = JSON.stringify(removals);
  const url = `blackjacks/getHandStrategy?p1=${p1}&p2=${p2}&d1=${d1}&removals=${removalsString}&sampleSize=30000`;
  return getStrapi(url);
}

export function getDidWrongStrategy() {
  const url = 'blackjacks?_limit=1000&didWrong=true';
  return getStrapi(url);
}

export function getSpecialStrategy() {
  const url = 'blackjacks?_limit=1000&isSpecial=true';
  return getStrapi(url);
}

export function getAllStrategy() {
  const url = 'blackjacks?_limit=50000&isSpecial=true';
  return getStrapi(url);
}

export function setDidWrong(id) {
  const url = `blackjacks/${id}`;
  return updateStrapi(url, { didWrong: true });
}
