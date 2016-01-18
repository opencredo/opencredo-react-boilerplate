import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import debug from 'debug';
import { syncHistory } from 'redux-simple-router';
import DevTools from 'containers/DevTools';

const log = debug('app:redux');

export default function configureStore(initialState, browserHistory) {
  let createStoreWithMiddleware;
  const logger = createLogger({
    logger: { log },
  });

  const reduxRouterMiddleware = syncHistory(browserHistory);
  const middleware = applyMiddleware(reduxRouterMiddleware, thunk, logger);

  if (__DEBUG__) {
    createStoreWithMiddleware = compose(
      middleware,
      window.devToolsExtension
        ? window.devToolsExtension()
        : DevTools.instrument()
    );
  } else {
    createStoreWithMiddleware = compose(middleware);
  }

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./root-reducer', () => {
      const nextRootReducer = require('./root-reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
