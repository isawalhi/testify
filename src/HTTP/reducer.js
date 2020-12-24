import Types from './actionTypes';

const initialState = {
  loader: false,
};

const httpReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_REQUEST_LOADER:
      return { ...state, loader: true };
    case Types.HIDE_REQUEST_LOADER:
      return { ...state, loader: false };
    default: return state;
  }
};

export default httpReducer;
