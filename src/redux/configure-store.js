import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import createLogger from 'redux-logger';
import debug from 'debug';

const log = debug('app:redux');

if (__DEBUG__) {
  debug.enable('app:*');
}

export default function configureStore(initialState) {
  let createStoreWithMiddleware;
  const logger = createLogger({
    logger: {log},
  });

  const middleware = applyMiddleware(thunk, logger);

  if (__DEBUG__) {
    createStoreWithMiddleware = compose(
      middleware,
      window.devToolsExtension
        ? window.devToolsExtension()
        : require('containers/DevTools').default.instrument()
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
