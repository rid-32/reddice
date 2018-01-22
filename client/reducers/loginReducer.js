import setAuthorizationToken from '../utils/setAuthorizationToken';

const initialState = {
  loginRequestErrors: {},
  loginErrors: {},
  isLoggedIn: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'successLoginRequest':
      return Object.assign({}, state, {
        loginErrors: {},
        loginRequestErrors: {},
        isLoggedIn: true,
        user: action.user,
      });
    case 'failedLoginRequest':
      return Object.assign({}, state, {
        loginRequestErrors: action.errorObj,
      });
    case 'failedLoginValidation':
      return Object.assign({}, state, {
        loginErrors: action.errors,
      });
    case 'userLogout':
      localStorage.removeItem('jwtToken');
      setAuthorizationToken();
      return Object.assign({}, state, {
        isLoggedIn: false,
        user: {},
      });
    default: return state;
  }
}
