import React, { Component } from 'react';

import timezones from '../../data/timezones';

export default class SignupForm extends Component {
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
    console.log(this.state);
  }

  render() {
    const options = Object.keys(timezones).map((item) => (
      <option key={ item } value={ timezones[item] }>{ item }</option>
    ));

    return (
      <form onSubmit={ this.onSubmit }>
        <h1>Join our community!</h1>

        <div className="form-group">
          <label htmlFor="usernameId" className="control-label">Username</label>
          <input
            id="usernameId"
            type="text"
            name="username"
            value={ this.state.username }
            className="form-control"
            onChange={ this.onChange }
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailId" className="control-label">Email</label>
          <input
            id="emailId"
            type="email"
            name="email"
            value={ this.state.email }
            className="form-control"
            onChange={ this.onChange }
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordId" className="control-label">Password</label>
          <input
            id="passwordId"
            type="password"
            name="password"
            value={ this.state.password }
            className="form-control"
            onChange={ this.onChange }
          />
        </div>

        <div className="form-group">
          <label htmlFor="passwordConfirmationId" className="control-label">Password Confirmation</label>
          <input
            id="passwordConfirmationId"
            type="password"
            name="passwordConfirmation"
            value={ this.state.passwordConfirmation }
            className="form-control"
            onChange={ this.onChange }
          />
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign up</button>
        </div>
      </form>
    );
  }
}
