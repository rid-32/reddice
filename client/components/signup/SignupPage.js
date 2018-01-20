import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';

import SignupForm from './SignupForm';

class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-5 mx-auto">
          <SignupForm userRequest={ this.props.userRequest } signupErrors={this.props.signupErrors} isLoading={this.props.isLoading} isLoad={this.props.isLoad} clientValidation={this.props.clientValidation} isUserExists={this.props.isUserExists} erazeError={this.props.erazeError}/>
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

    isUserExists: (val, errors, field) => {
      dispatch(isUserExists(val, errors, field));
    },

    erazeError: (field, errors) => {
      let errorObj = Object.assign({}, errors);
      errorObj[field] = '';
      dispatch({
        type: 'failedSignupRequest',
        errorObj: errorObj,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
