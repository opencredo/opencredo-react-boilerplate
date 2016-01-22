import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import configureStore from './redux/configure-store';
import routes from './routes';
import Root from './containers/Root';
import debug from 'debug';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/lib/locale-data/en';
import es from 'react-intl/lib/locale-data/es';

addLocaleData(en);
addLocaleData(es);

if (__DEBUG__) {
  debug.enable('app:*');
}

const store = configureStore({}, browserHistory);

// Render the React application to the DOM
ReactDOM.render(
  <Root history={browserHistory} store={store} routes={routes} />,
  document.getElementById('root')
);
