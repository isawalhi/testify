import Types from './actionTypes';

const initialState = {
  all: [],
  filtered: [],
  loading: false,
};

const suitesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_ALL_SUITES:
      return { ...state, all: action.suites, loading: false };
    case Types.SET_FILTERED_SUITES:
      return { ...state, filtered: action.filteredSuites };
    case Types.SET_LOADING_STATUS:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export const selector = (state) => state.suites;

export default suitesReducer;
