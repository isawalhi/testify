import { put, takeLatest } from 'redux-saga/effects';

import { doGetRequest } from '../../HTTP';

import mockedSuite from './__Mocks__/dataSource.json';

import Types from './actionTypes';
import { setSuite } from './actions';

function* getSuite(action) {
  try {
    const suite = yield doGetRequest(`http://localhost:3001/api/v1/suite/${action.id}`, {}, false);
    yield put(setSuite(suite));
  } catch (e) {
    yield put(setSuite(mockedSuite));
    // eslint-disable-next-line no-console
    console.error('Failed to get suite');
  }
}

export default function* watcher() {
  yield takeLatest(Types.GET_SUITE, getSuite);
}
