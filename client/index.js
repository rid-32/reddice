import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

render(
  <Router>
    <div>
      <Route exact path="/" render={ ({ match }) => (
        <App>
          <Greetings />
        </App>
      ) } />
      <Route path="/signup" render={ ({ match }) => (
        <App>
          <SignupPage />
        </App>
      ) } />
    </div>
  </Router>,
  document.getElementById('root')
);
