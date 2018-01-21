import axios from 'axios';
import jwt from 'jsonwebtoken';

import history from '../browserHistory';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export function userLoginRequest(data) {
  return dispatch => axios.post('/api/auth', data)
    .then(({ data }) => {
      const token = data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);

      const currentUser = jwt.decode(token);

      dispatch({
        type: 'successLoginRequest',
        user: currentUser,
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
