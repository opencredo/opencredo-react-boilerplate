import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { applyMiddleware, compose, createStore } from 'redux';
import { syncHistory } from 'redux-simple-router';

function withDevTools(middleware) {
  const devTools = window.devToolsExtension
    ? window.devToolsExtension()
    : require('../containers/DevTools').instrument();
  return compose(middleware, devTools);
}

export default function configureStore(initialState, browserHistory) {
  const routerMiddleware = syncHistory(browserHistory);

  let middleware = applyMiddleware(thunk, routerMiddleware);

  if (__DEBUG__) {
    // use devtools in debug environment
    middleware = withDevTools(middleware);
  }

  const store = middleware(createStore)(rootReducer, initialState);

  if (__DEBUG__) {
    // listen for route replays (devtools)
    routerMiddleware.listenForReplays(store, ({ routing }) => routing);
  }

  if (module.hot) {
    module.hot.accept('./root-reducer', () => {
      const nextRootReducer = require('./root-reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
