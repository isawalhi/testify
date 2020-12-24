import Types from './actionTypes';

export const showRequestLoader = () => ({
  type: Types.SHOW_REQUEST_LOADER,
});

export const hideRequestLoader = () => ({
  type: Types.HIDE_REQUEST_LOADER,
});

export default { showRequestLoader, hideRequestLoader };
