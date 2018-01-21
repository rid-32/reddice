export default function (state = { loginRequestErrors: {}, loginErrors: {}, isLoggedIn: false }, action) {
  switch (action.type) {
    case 'successLoginRequest':
      return Object.assign({}, state, {
        loginErrors: {},
        loginRequestErrors: {},
        isLoggedIn: true,
      });
    case 'failedLoginRequest':
      return Object.assign({}, state, {
        loginRequestErrors: action.errorObj,
      });
    case 'failedLoginValidation':
      return Object.assign({}, state, {
        loginErrors: action.errors,
      });
    default: return state;
  }
}
