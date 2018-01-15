export default function (state = { signupErrors: {} }, action) {
  switch (action.type) {
    case 'successSignupRequest':
      return Object.assign({}, state, {
        signupErrors: {},
      });
    case 'failedSignupRequest':
      return Object.assign({}, state, {
        signupErrors: action.errorObj,
      });
    default:
      return state;
  }
}
