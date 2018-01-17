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
          <SignupForm userRequest={ this.props.userRequest } signupErrors={this.props.signupErrors} isLoading={this.props.isLoading} isLoad={this.props.isLoad} clientValidation={this.props.clientValidation} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    signupErrors: state.signup.signupErrors,
    isLoad: state.signup.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userRequest: (userData) => {
      dispatch(userSignupRequest(userData));
    },

    isLoading: () => dispatch({
      type: 'isLoading',
    }),

    clientValidation: (errors) => dispatch({
      type: 'failedSignupRequest',
      errorObj: errors,
    }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
