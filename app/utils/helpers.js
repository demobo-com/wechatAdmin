/* global location */
/* eslint no-restricted-globals: ["error", "event"] */
// import CryptoJS from 'crypto-js';
import _ from 'lodash';
import queryString from 'query-string';
import moment from 'moment';
import numeral from 'numeral';
import auth from 'utils/auth';

import {
  DEV_STRAPI_BASE,
  BACKEND_DEV_STRAPI_BASE,
  PROD_STRAPI_BASE,
} from 'configs/strapi-config';

export const dollar = (val) => `$ ${numeral(val).format('0,0.0a')}`;

export function printByDomId(domId) {
  document.getElementById('print-area').innerHTML = '';
  document.getElementById('print-area').innerHTML = document.getElementById(
    domId,
  ).outerHTML;
  window.print();
}

// export function getImageBlobMD5(blob) {
//   const mdsum = CryptoJS.MD5(blob);
//   return mdsum;
// }

export function getEnvironment() {
  return location.hostname === 'localhost' ? 'dev' : 'prod';
}

export function getStrapiBase() {
  if (location.hostname === 'localhost') return DEV_STRAPI_BASE;
  if (location.hostname === 'dev.localhost') return BACKEND_DEV_STRAPI_BASE;
  return PROD_STRAPI_BASE;
}
export function getStaticApiUrl(fileName) {
  const path = ''; // TODO replace
  const date = new Date();
  const refreshNum = `${date.getDate()}-${date.getHours()}`;
  return `${path + fileName}?${refreshNum}`;
}
export const optionsPost = (data = '') => {
  let bodyData = data;
  if (typeof data === 'object') {
    bodyData = queryString.stringify(data);
  }
  const headers = {
    Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  };
  return {
    method: 'POST',
    headers,
    body: bodyData,
  };
};
export const optionsGet = () => ({
  method: 'GET',
  headers: {
    Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
});
export const optionsGetWithHeaders = (data) => ({
  method: 'GET',
  headers: {
    Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    ...data,
  },
});
export const nullFunction = () => null;
export const getErrorMessage = (error) => {
  if (!error.response) return error.error || error.message;

  const { message } = error.response.payload;
  switch (typeof message) {
    case 'string':
      return message;
    case 'object': {
      const { messages } = message[0];
      return messages[0].id;
    }
    default:
      return 'error';
  }
};

export const getCurrentRoute = (routes, routeName) =>
  _.find(routes, (route) => route.name === routeName);
export const getParentsRoute = (routes, routeName) => {
  const currentRoute = getCurrentRoute(routes, routeName);
  let { parents } = currentRoute;
  if (!parents || !parents.length) parents = ['menuPage'];
  parents = [...parents, routeName];

  return parents.map((name) => {
    const current = getCurrentRoute(routes, name);
    return {
      path: current.path,
      name,
    };
  });
};

export function getFeature(carInfo, locale) {
  const featuresEn = _.pick(carInfo, 'feature')
    ? Object.values(_.pick(carInfo, 'feature'))
    : {};
  const featuresZH = _.pick(carInfo, 'featureZH')
    ? Object.values(_.pick(carInfo, 'featureZH'))
    : { featuresEn };
  const featureArrEn = featuresEn ? _.split(featuresEn[0], ',') : [];
  const featureArrZh = featuresZH ? _.split(featuresZH[0], '，') : [];
  const featureArr = locale === 'zh' ? featureArrZh : featureArrEn;

  return featureArr;
}
export function trackEvent({ eventName, eventData }) {
  window.Intercom('trackEvent', eventName, eventData);
  const keys = Object.keys(eventData);
  const values = Object.values(eventData);
  if (window.ga) {
    keys.forEach((key, i) => {
      const value = values[i];
      window.ga('send', {
        hitType: 'event',
        eventCategory: eventName,
        eventAction: key,
        eventLabel: value,
      });
    });
  }
}
export function getArea() {
  return 'bayArea';
}
export function stopProloader() {
  setTimeout(() => window.$('#preloader').fadeOut('slow'), 500);
}

export function generateRandomId(prefix, suffix, length) {
  let id = prefix;
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let i = length;
  while (i > 0) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
    i -= 1;
  }
  id += suffix;

  return id;
}
export function generateTimeStampId(prefix, length) {
  let id = prefix;
  const timeStamp = new Date().valueOf().toString();
  id += timeStamp.slice(-length);
  return id;
}
export const getRandomString = (length = 12) => {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return _.map(Array(length), () =>
    possible.charAt(Math.floor(Math.random() * possible.length)),
  ).join('');
};
export const isValidFirebaseEndPoint = (firebaseEndPoint) => {
  if (!firebaseEndPoint) return false;
  const path =
    typeof firebaseEndPoint === 'string'
      ? firebaseEndPoint.split('/')
      : firebaseEndPoint;
  return path.every((d) => d);
};
export const getOppositeBoolean = (value) =>
  !value || value.toString().toLowerCase() === 'false';
export const getSameBoolean = (value) => !getOppositeBoolean(value);
export const getFileMimeTypeByFileExt = (filePath) => {
  const ext = filePath.split('.')[1];
  switch (ext) {
    case 'jpg':
      return 'image/jpeg';
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'bmp':
      return 'image/bmp';
    case 'gif':
      return 'image/gif';
    case 'pdf':
      return 'application/pdf';
    case 'zip':
      return 'application/zip';
    case 'doc':
      return 'application/msword';
    case 'json':
      return 'application/json';
    case 'txt':
      return 'text/plain';
    case 'html':
      return 'text/html';
    case 'csv':
      return 'text/csv';
    default:
      return 'application/octet-stream';
  }
};
export const getDaysByStartDate = (date, term) => {
  const pickupDate = moment(new Date(date)).format('YYYY-MM-DD');
  const returnDate = moment(pickupDate)
    .add(Number(term), 'months')
    .format('YYYY-MM-DD');
  const days = moment(returnDate).diff(moment(pickupDate), 'days');
  return days;
};

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

export const cutOffHour = 5;
export function getEndOf(date) {
  return moment(date)
    .tz('America/Los_Angeles')
    .endOf('day')
    .add(cutOffHour, 'hour');
}
export function getStartOf(date) {
  return moment(date)
    .tz('America/Los_Angeles')
    .startOf('day')
    .add(cutOffHour, 'hour');
}

export function getDate(type) {
  if (type === 'yesterday') {
    return moment()
      .tz('America/Los_Angeles')
      .subtract(1, 'day')
      .subtract(cutOffHour, 'hour')
      .format('YYYY-MM-DD');
  }
  return moment()
    .tz('America/Los_Angeles')
    .subtract(cutOffHour, 'hour')
    .format('YYYY-MM-DD');
}

export function getTimeDistance(type) {
  let timeDistance;
  if (type === 'today') {
    timeDistance = [getStartOf(moment()), getEndOf(moment())];
  } else if (type === 'yesterday') {
    timeDistance = [
      getStartOf(moment().subtract(1, 'day')),
      getEndOf(moment().subtract(1, 'day')),
    ];
  } else if (type === 'week') {
    timeDistance = [
      getStartOf(moment().subtract(6, 'day')),
      getEndOf(moment()),
    ];
  } else if (type === '2week') {
    timeDistance = [
      getStartOf(moment().subtract(13, 'day')),
      getEndOf(moment()),
    ];
  } else if (type === 'month') {
    timeDistance = [
      getStartOf(
        moment()
          .subtract(1, 'month')
          .add(1, 'day'),
      ),
      getEndOf(moment()),
    ];
  } else {
    timeDistance = [
      getStartOf(
        moment()
          .subtract(1, 'year')
          .add(1, 'day'),
      ),
      getEndOf(moment()),
    ];
  }
  return timeDistance;
}

export const getBusinessDate = (dateTime) =>
  // cut off time is America/Los_Angeles 5:00AM
  moment(dateTime)
    .tz('America/Los_Angeles')
    .subtract(cutOffHour, 'hour')
    .format('YYYY-MM-DD');

export const isToday = (dateTime) =>
  getBusinessDate(dateTime) === getBusinessDate(moment());

export const isPending = (currentState) =>
  !isCompleted(currentState) && !isFailed(currentState);

export const isCompleted = (currentState) => ['COMPLETED'].includes(currentState);

export const isFailed = (currentState) =>
  ['CANCELLED', 'FAILED'].includes(currentState);

export const getUserLocationName = () => {
  const user = auth.getUserInfo();
  const spoke =
    user && user.role && user.role.name === 'Spoke'
      ? _.startCase(user.username)
      : false;
  return spoke;
};
