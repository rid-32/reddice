import initialState from '../data/initialSignupState';

export default function (state = initialState, action) {
  switch (action.type) {
    case 'successSignupRequest':
      return Object.assign({}, state, {
        signupErrors: {},
        isLoading: false,
        isSignedUp: true,
      });
    case 'failedSignupRequest':
      return Object.assign({}, state, {
        signupErrors: action.errorObj,
        isLoading: false,
      });
    case 'isLoading':
      return Object.assign({}, state, {
        isLoading: true,
      });
    default:
      return state;
  }
}
