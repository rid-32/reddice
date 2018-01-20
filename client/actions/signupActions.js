import axios from 'axios';
import history from '../browserHistory';
import { addFlashMessage } from './flashMessagesAction';

export function userSignupRequest(userData) {
  return dispatch => axios.post('/api/users', userData)
    .then(
      ({ data }) => {
        dispatch({
          type: 'successSignupRequest',
        });
        dispatch(addFlashMessage({
          type: 'success',
          text: 'You signed up successfully. Welcome!',
        }));
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

export function isUserExists(identifier, errors, field) {
  return dispatch => axios.get(`/api/users/${identifier}`)
    .then(
      (user) => {
        let errorObj = Object.assign({}, errors);
        if (user.data.user) {
          errorObj[field] = `User with this ${field} is already exist.`;
        } else {
          errorObj[field] = '';
        }

        dispatch({
          type: 'failedSignupRequest',
          errorObj: errorObj,
        });
      }
    );
}
