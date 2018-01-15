import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => axios.post('/api/users', userData)
    .then(
      ({ data }) => {
        dispatch({
          type: 'successSignupRequest',
        });
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
