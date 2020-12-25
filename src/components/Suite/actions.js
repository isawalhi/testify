import Types from './actionTypes';

export const getSuite = (id) => ({
  type: Types.GET_SUITE,
  id,
});

export const setSuite = (suite) => ({
  type: Types.SET_SUITE,
  suite,
});

export default { getSuite, setSuite };
