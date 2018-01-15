import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';

import SignupForm from './SignupForm';

class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-5 mx-auto">
          <SignupForm userRequest={ this.props.userRequest } signupErrors={this.props.signupErrors} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    signupErrors: state.signupErrors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userRequest: (userData) => {
      dispatch(userSignupRequest(userData));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
