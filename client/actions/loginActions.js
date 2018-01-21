import axios from 'axios';

import history from '../browserHistory';

export function userLoginRequest(data) {
  return dispatch => axios.post('/api/auth', data)
    .then(data => {
      dispatch({
        type: 'successLoginRequest',
      });
      dispatch({
        type: 'successSignupRequest',
      });
      history.push('/');
    })
    .catch(({ response }) => {
      const errors = response.data.errors;

      dispatch({
        type: 'failedLoginRequest',
        errorObj: errors,
      });
    });
};
