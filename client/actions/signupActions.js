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
