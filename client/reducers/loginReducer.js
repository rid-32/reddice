export default function (state = { loginErrors: {}, isLoggedIn: false }, action) {
  switch (action.type) {
    case 'successLoginRequest':
      return Object.assign({}, state, {
        loginErrors: {},
        isLoggedIn: true,
      });
    case 'failedLoginRequest':
      return Object.assign({}, state, {
        loginErrors: action.errorObj,
      });
    case 'failedLoginValidation':
      return Object.assign({}, state, {
        loginErrors: action.errors,
      });
    default: return state;
  }
}
