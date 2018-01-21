import { combineReducers } from 'redux';

import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import flashMessagesReducer from './flashMessagesReducer';

export default combineReducers({
  signup: signupReducer,
  login: loginReducer,
  flashMessages: flashMessagesReducer,
});
