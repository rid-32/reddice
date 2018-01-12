import React, { Component } from 'react';

import SignupForm from './SignupForm';

export default class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-5 mx-auto">
          <SignupForm />
        </div>
      </div>
    );
  }
}
