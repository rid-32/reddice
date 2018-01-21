import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

import rootReducer from './reducers/rootReducer';

import history from './browserHistory';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

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
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});

history.push('/');
