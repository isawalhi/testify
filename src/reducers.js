import { combineReducers } from 'redux';
import { reducer as httpReducer } from './HTTP';
import { reducer as suitesReducer } from './components/Suites';

const reducers = combineReducers({
  suites: suitesReducer,
  http: httpReducer,
});

export default reducers;
