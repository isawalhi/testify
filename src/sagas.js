import { all } from 'redux-saga/effects';

import { suiteSaga } from './components/Suite';
import { suitesSaga } from './components/Suites';

export default function* scoringSystemSaga() {
  yield all([suitesSaga(), suiteSaga()]);
}
