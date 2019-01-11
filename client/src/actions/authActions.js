import axios from 'axios';
import { GET_ERRORS } from './types';

// Register User

export const registerUser = (userData, history) => dispatch => {
  // thanks to thunk
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login')) // redirect thansk to withRouter see Register component
    // .catch(err => console.log(err.response.data));
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
