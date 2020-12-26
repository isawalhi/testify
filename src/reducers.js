import { combineReducers } from 'redux';
import { httpReducer } from './HTTP';
import { suiteReducer } from './components/Suite';
import { suitesReducer } from './components/Suites';

const reducers = combineReducers({
  suites: suitesReducer,
  suite: suiteReducer,
  http: httpReducer,
});

export default reducers;
