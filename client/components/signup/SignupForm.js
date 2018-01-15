import React, { Component } from 'react';
import PropTypes from 'prop-types';

import timezones from '../../data/timezones';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userRequest(this.state);
  }

  render() {
    const options = Object.keys(timezones).map((item) => (
      <option key={ item } value={ timezones[item] }>{ item }</option>
    ));

    let errors = this.props.signupErrors;

    function createHelpBlock(str) {
      return (
        <span className="has-error">{ str }</span>
      );
    }

    function formGroupClasses(err) {
      let classN = 'form-group';
      if (err) {
        classN += ' has-error';
      }

      return classN;
    }

    return (
      <form onSubmit={ this.onSubmit }>
        <h1>Join our community!</h1>

        <div className={ formGroupClasses(errors.username) }>
          <label htmlFor="usernameId" className="control-label">Username</label>
          <input
            id="usernameId"
            type="text"
            name="username"
            value={ this.state.username }
            className="form-control"
            onChange={ this.onChange }
          />
          { errors && createHelpBlock(errors.username) }
        </div>

        <div className={ formGroupClasses(errors.email) }>
          <label htmlFor="emailId" className="control-label">Email</label>
          <input
            id="emailId"
            type="email"
            name="email"
            value={ this.state.email }
            className="form-control"
            onChange={ this.onChange }
          />
          { errors && createHelpBlock(errors.email) }
        </div>

        <div className={ formGroupClasses(errors.password) }>
          <label htmlFor="passwordId" className="control-label">Password</label>
          <input
            id="passwordId"
            type="password"
            name="password"
            value={ this.state.password }
            className="form-control"
            onChange={ this.onChange }
          />
          { errors && createHelpBlock(errors.password) }
        </div>

        <div className={ formGroupClasses(errors.passwordConfirmation) }>
          <label htmlFor="passwordConfirmationId" className="control-label">Password Confirmation</label>
          <input
            id="passwordConfirmationId"
            type="password"
            name="passwordConfirmation"
            value={ this.state.passwordConfirmation }
            className="form-control"
            onChange={ this.onChange }
          />
          { errors && createHelpBlock(errors.passwordConfirmation) }
        </div>

        <div className={ formGroupClasses(errors.timezone) }>
          <label htmlFor="timezoneId" className="control-label">Timezone</label>
          <select
            id="timezoneId"
            name="timezone"
            value={ this.state.timezone }
            className="form-control"
            onChange={ this.onChange }
          >
            <option value="" disabled>Choose Your Timezone</option>
            { options }
          </select>
          { errors && createHelpBlock(errors.timezone) }
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign up</button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userRequest: PropTypes.func.isRequired,
};

export default SignupForm;
