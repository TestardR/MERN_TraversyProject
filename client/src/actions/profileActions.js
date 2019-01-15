import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE
} from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        // if error we want ot return an empty profile
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Profile loading
export const clearCurrentProfile = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const setProfileLoading = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
