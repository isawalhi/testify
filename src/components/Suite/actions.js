import Types from './actionTypes';

export const getSuite = (id) => ({
  type: Types.GET_SUITE,
  id,
});

export const setSuite = (suite) => ({
  type: Types.SET_SUITE,
  suite,
});

export const setLoadingStatus = (loading) => ({
  type: Types.SET_LOADING_STATUS,
  loading,
});

export default { getSuite, setSuite, setLoadingStatus };
