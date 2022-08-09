import request from 'utils/request';
import { message } from 'antd';
import {
  getErrorMessage,
  getUserLocationName,
  getStartOf,
} from 'utils/helpers';
// import moment from 'moment';
import _ from 'lodash';
const qs = require('qs');

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

export function getAllStrategy() {
  const query = qs.stringify({
    filters: {
      // isSpecial: {
      //   $eq: true,
      // },
    },
    populate: '*',
    pagination: {
      pageSize: 50000,
      page: 1,
    },
  }, {
    encodeValuesOnly: true,
  });
  const url = `blackjacks?${query}`;
  return getStrapi(url).then((res) => res.data.map((item) => {
    item.attributes.id = item.id;
    return item.attributes;
  }));
}

export function setDidWrong(id) {
  const url = `blackjacks/${id}`;
  return updateStrapi(url, { data: { didWrong: true } });
}
