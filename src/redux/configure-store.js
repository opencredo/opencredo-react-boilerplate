/* eslint global-require: 0 */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import DevTools from '../containers/DevTools';
// import createLogger from 'redux-logger';

export default function configureStore(initialState, history) {
  // Installs hooks that always keep react-router and redux store in sync
  const middleware = [thunk, routerMiddleware(history)];
  let store;

  if (__DEBUG__) {
    // middleware.push(createLogger());
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(...middleware),
      DevTools.instrument(),
      persistState(
        window.location.href.match(
          /[?&]debug_session=([^&#]+)\b/
        )
      )
    ));
  } else {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), f => f));
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./root-reducer', () => {
      const nextRootReducer = require('./root-reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
