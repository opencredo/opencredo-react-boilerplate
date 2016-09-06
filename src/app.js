/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import debug from 'debug';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import configureStore from './redux/configure-store';
import routes from './routes';
import Root from './containers/Root';
import Redbox from 'redbox-react';

addLocaleData(en);
addLocaleData(es);

if (__DEBUG__) {
  debug.enable('app:*');
}

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');

if (__DEBUG__) {
  const { AppContainer } = require('react-hot-loader');

  const render = () => {
    ReactDOM.render(
      <AppContainer documentTitle={ 'React-Hot-Loader' } language={ 'english' } errorReporter={ Redbox }>
        <Root
          store={ store }
          routes={ routes }
          history={ history }
        />
      </AppContainer>,
      rootElement
    );
  };
  render();

  if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      const NextApp = require('./containers/Root').default;
      render(
        <AppContainer documentTitle={ 'React-Hot-Loader' } language={ 'english' } errorReporter={ Redbox }>
          <Provider store={ store }>
            <NextApp
              store={ store }
              routes={ routes }
              history={ history }
            />
          </Provider>
        </AppContainer>,
        rootElement
      );
    });
  }

} else {
  ReactDOM.render(
    <Provider store={ store }>
      <Router
        store={ store }
        routes={ routes }
        history={ history }
      />
    </Provider>,
    rootElement
  );
}


// const initialState = window.__INITIAL_STATE__;
// const store = configureStore(initialState, browserHistory);
// const history = syncHistoryWithStore(browserHistory, store);
//
// // Render the React application to the DOM
// render(
//   <AppContainer documentTitle={'React-Hot-Loader'} language={'english'} errorReporter={Redbox} >
//     <Root
//       store={store}
//       routes={routes}
//     />
//   </AppContainer>,
//   document.getElementById('root')
// );
//
// if (module.hot) {
//   module.hot.accept('./containers/Root', () => {
//     const RootContainer = require('./containers/Root').default;
//     render(
//       <AppContainer documentTitle={'React-Hot-Loader'} language={'english'} errorReporter={Redbox} >
//         <RootContainer
//           store={store}
//           routes={routes}
//         />
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }
