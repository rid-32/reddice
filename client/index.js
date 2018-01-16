import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

import rootReducer from './reducers/rootReducer';

import history from './browserHistory';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
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
            store.getState().isSignedUp ? (
              <Redirect to="/" />
            ) : (
              <App>
                <SignupPage />
              </App>
            )
          ) } />
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});

history.push('/');
