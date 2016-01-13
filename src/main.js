import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {syncReduxAndRouter} from 'redux-simple-router';
import Root from './containers/Root';
import configureStore from './redux/configure-store';

const store = configureStore({}, browserHistory);

syncReduxAndRouter(browserHistory, store, (state) => state.router);

// Render the React application to the DOM
ReactDOM.render(
  <Root history={browserHistory} store={store} />,
  document.getElementById('root')
);
