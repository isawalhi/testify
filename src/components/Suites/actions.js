import Types from './actionTypes';

export const getAllSuites = () => ({
  type: Types.GET_ALL_SUITES,
});

export const setAllSuites = (suites) => ({
  type: Types.SET_ALL_SUITES,
  suites,
});

export const setFilteredSuites = (filteredSuites) => ({
  type: Types.SET_FILTERED_SUITES,
  filteredSuites,
});

export const setLoadingStatus = (loading) => ({
  type: Types.SET_LOADING_STATUS,
  loading,
});

export default { getAllSuites, setAllSuites, setLoadingStatus };
