import { combineReducers } from 'redux';

import signupReducer from './signupReducer';
import flashMessagesReducer from './flashMessagesReducer';

export default combineReducers({
  signup: signupReducer,
  flashMessages: flashMessagesReducer,
});
