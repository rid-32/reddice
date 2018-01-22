import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import jwt from 'jsonwebtoken';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';

import rootReducer from './reducers/rootReducer';

import history from './browserHistory';
import setAuthorizationToken from './utils/setAuthorizationToken';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch({
    type: 'successLoginRequest',
    user: jwt.decode(localStorage.jwtToken),
  });
}

const unlisten = history.listen((location, action) => {
  render(
    <Provider store={ store }>
      <Router>
        <div>
          <Route exact path="/" render={ ({ match }) => (
            <App>
              <Greetings />
            </App>
          ) } />
          <Route path="/signup" render={ ({ match }) => (
            store.getState().signup.isSignedUp ? (
              <Redirect to="/" />
            ) : (
              <App>
                <SignupPage />
              </App>
            )
          ) } />
          <Route path="/login" render={ ({ match }) => (
            store.getState().login.isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <App>
                <LoginPage />
              </App>
            )
          )} />
          <Route path="/new-event" render={ ({ match }) => (
              <App>
                <NewEventPage />
              </App>
          )} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});

history.push('/');
