import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

export default class Root extends React.Component {

  static propTypes = {
    routes: PropTypes.element.isRequired,
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  // redux devtools pane
  get devTools() {
    if (__DEBUG__) {
      if (__DEBUG_NEW_WINDOW__) {
        if (!window.devToolsExtension) {
          require('../redux/utils/createDevToolsWindow').default(this.props.store);
        } else {
          window.devToolsExtension.open();
        }
      } else if (!window.devToolsExtension) {
        const DevTools = require('containers/DevTools').default;

        return <DevTools />;
      }
    }
  }

  render() {
    const {routes, history, store} = this.props;

    return (
      <Provider store={store} >
        <div style={{height: '100%'}} className={store.rootClass}>
          <Router history={history}>
            {routes}
          </Router>
          {this.devTools}
        </div>
      </Provider>
    );
  }
}
