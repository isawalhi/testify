import { combineReducers } from 'redux';
import { reducer as httpReducer } from './HTTP';
import { reducer as suiteReducer } from './components/Suite';
import { reducer as suitesReducer } from './components/Suites';

const reducers = combineReducers({
  suites: suitesReducer,
  suite: suiteReducer,
  http: httpReducer,
});

export default reducers;
