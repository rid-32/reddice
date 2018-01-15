import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

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
          <App>
            <SignupPage />
          </App>
        ) } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
