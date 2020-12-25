import { all } from 'redux-saga/effects';

import { saga as suiteSaga } from './components/Suite';
import { saga as suitesSaga } from './components/Suites';

export default function* scoringSystemSaga() {
  yield all([suitesSaga(), suiteSaga()]);
}
