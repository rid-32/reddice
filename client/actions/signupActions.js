import axios from 'axios';
import history from '../browserHistory';

export function userSignupRequest(userData) {
  return dispatch => axios.post('/api/users', userData)
    .then(
      ({ data }) => {
        dispatch({
          type: 'successSignupRequest',
        });
        history.push('/');
      }
    )
    .catch(
      ({ response }) => {
        dispatch({
          type: 'failedSignupRequest',
          errorObj: response.data,
        });
      }
    );
};
