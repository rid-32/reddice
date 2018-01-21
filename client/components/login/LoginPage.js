import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { userLoginRequest } from '../../actions/loginActions';

class LoginPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-5 mx-auto">
          <LoginForm loginErrors={ this.props.loginErrors } loginValidation={ this.props.loginValidation } loginRequest={ this.props.loginRequest } loginRequestErrors={ this.props.loginRequestErrors } />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginErrors: state.login.loginErrors,
    loginRequestErrors: state.login.loginRequestErrors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginValidation: (errors) => {
      dispatch({
        type: 'failedLoginValidation',
        errors: errors,
      });
    },

    loginRequest: data => {
      dispatch(userLoginRequest(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
