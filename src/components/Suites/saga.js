import { put, takeLatest } from 'redux-saga/effects';

import { doGetRequest } from '../../HTTP';

import Types from './actionTypes';
import { setAllSuites, setLoadingStatus } from './actions';

import mockedSuites from './__Mocks__/dataSource.json';

function* getAllSuites() {
  try {
    yield put(setLoadingStatus(true));

    const suites = yield doGetRequest(
      'http://localhost:3001/api/v1/suites',
      {},
      false,
    );
    yield put(setAllSuites(suites));
  } catch (e) {
    // TODO remove or set a flag to return mocked data
    yield put(setAllSuites(mockedSuites));
    // eslint-disable-next-line no-console
    console.error('Failed to fetch suites');
  }
}

export default function* watcher() {
  yield takeLatest(Types.GET_ALL_SUITES, getAllSuites);
}
