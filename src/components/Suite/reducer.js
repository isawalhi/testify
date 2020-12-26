import Types from './actionTypes';

const initialState = {
  loading: false,
};

const suiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_SUITE: {
      const { suite } = action;
      return { ...state, [suite.id]: { ...suite } };
    }
    case Types.SET_LOADING_STATUS: {
      return { ...state, loading: action.loading };
    }
    default: {
      return state;
    }
  }
};

export const suiteSelector = (state) => state.suite;

export default suiteReducer;
