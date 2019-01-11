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

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      //  Save to localStorage
      const { token } = res.data;
      // Set token to localStorage (only String)
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
