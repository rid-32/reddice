import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.props.loginValidation(errors);
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.props.loginRequest(this.state);
    }
  }

  render() {
    let errors = this.props.loginErrors;

    return (
      <form onSubmit={ this.onSubmit }>
        <h1>Login</h1>

        <TextFieldGroup
          type="text"
          name="username"
          label="Username / Email"
          value={ this.state.username }
          errors={ errors }
          onChange={ this.onChange }
        />
        <TextFieldGroup
          type="password"
          name="password"
          label="Password"
          value={ this.state.password }
          errors={ errors }
          onChange={ this.onChange }
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Login</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  loginValidation: PropTypes.func.isRequired,
  loginRequest: PropTypes.func.isRequired,
};

export default LoginForm;
