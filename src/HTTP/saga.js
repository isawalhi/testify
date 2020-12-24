import { call, put } from 'redux-saga/effects';
import { doGet, doPost } from './methods';
import { showRequestLoader, hideRequestLoader } from './actions';
/**
 * Main method used for http requests
 * @param method
 * @param methodType
 * @param params
 * @param schema
 * @returns {{}}
 */
function* doRequest(method, params, isAllowLoader, returnWholeResponse) {
  try {
    if (isAllowLoader) {
      yield put(showRequestLoader());
    }
    const wholeResponse = yield call(method, params);

    const { data } = wholeResponse;

    if (isAllowLoader) {
      yield put(hideRequestLoader());
    }

    return returnWholeResponse ? wholeResponse : data;
  } catch (error) {
    if (isAllowLoader) {
      yield put(hideRequestLoader());
    }
    throw new Error('Invalid Request');
  }
}

/**
 * post request method
 * @param url
 * @param payload
 * @param headers
 * @param schema
 * @returns {*}
 */
export function* doPostRequest(
  url,
  payload = {},
  headers = {},
  schema,
  isAllowLoader = true,
  baseUrl,
  options = {},
  returnWholeResponse = false,
) {
  return yield doRequest(
    doPost,
    {
      url,
      payload,
      headers,
      options,
      baseUrl,
    },
    schema,
    isAllowLoader,
    returnWholeResponse,
  );
}

/**
 * get request method
 * @param url
 * @param headers
 * @param schema
 * @returns {*}
 */
export function* doGetRequest(
  url,
  headers = {},
  isAllowLoader = true,
  baseUrl,
  options = {},
  returnWholeResponse = false,
) {
  return yield doRequest(
    doGet,
    {
      url,
      headers,
      options,
      baseUrl,
    },
    isAllowLoader,
    returnWholeResponse,
  );
}
