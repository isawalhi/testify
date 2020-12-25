import Types from './actionTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_SUITE: {
      const { suite } = action;
      return { ...state, ...suite };
    }
    default: {
      return state;
    }
  }
};

export const suiteSelector = (state) => state.suite;

export default reducer;
