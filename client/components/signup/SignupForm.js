import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import timezones from '../../data/timezones';
import validateInput from '../../../server/shared/validations/signup';

import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.props.clientValidation(errors);
    }

    return isValid;
  }

  checkUserExists(e, errors) {
    const field = e.target.name;
    const val = e.target.value;

    if (val !== '') {
      this.props.isUserExists(val, errors, field);
    }
  }

  checkEmptyField(e, errors) {
    if (e.target.value !== '') {
      this.props.erazeError(e.target.name, errors);
    }
  }

  isEmptyErrors(errors) {
    for (let error in errors) {
      if (errors[error]) {
        return false;
      }
    }

    return true;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.props.isLoading();
      this.props.userRequest(this.state);
    }
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

        <TextFieldGroup
          errors={ errors }
          label="Username"
          onChange={ this.onChange }
          value={ this.state.username }
          name="username"
          type="text"
          checkUserExists={(e) => this.checkUserExists(e, errors)}
        />

        <TextFieldGroup
          errors={ errors }
          label="Email"
          onChange={ this.onChange }
          value={ this.state.email }
          name="email"
          type="text"
          checkUserExists={(e) => this.checkUserExists(e, errors)}
        />

        <TextFieldGroup
          errors={ errors }
          label="Password"
          onChange={ this.onChange }
          value={ this.state.password }
          name="password"
          type="password"
          checkUserExists={ (e) => this.checkEmptyField(e, errors) }
        />

        <TextFieldGroup
          errors={ errors }
          label="Password Confirmation"
          onChange={ this.onChange }
          value={ this.state.passwordConfirmation }
          name="passwordConfirmation"
          type="password"
          checkUserExists={ (e) => this.checkEmptyField(e, errors) }
        />

        <div className={ formGroupClasses(errors.timezone) }>
          <label htmlFor="timezoneId" className="control-label">Timezone</label>
          <select
            id="timezoneId"
            name="timezone"
            value={ this.state.timezone }
            className="form-control"
            onChange={ this.onChange }
            onBlur={ (e) => this.checkEmptyField(e, errors) }
          >
            <option value="" disabled>Choose Your Timezone</option>
            { options }
          </select>
          { errors && createHelpBlock(errors.timezone) }
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={ this.props.isLoad || !this.isEmptyErrors(errors) }>Sign up</button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userRequest: PropTypes.func.isRequired,
  isLoading: PropTypes.func.isRequired,
  clientValidation: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired,
};

export default SignupForm;
