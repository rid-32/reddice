import axios from 'axios';

export function createEvent(event) {
  return dispatch =>  axios.post('/api/events', event);
}
