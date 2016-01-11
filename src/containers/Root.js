import React from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncReduxAndRouter} from 'redux-simple-router';

export default class Root extends React.Component {

  static propTypes = {
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired,
  };

  componentWillMount() {
    syncReduxAndRouter(browserHistory, this.props.store, (state) => state.router);
  }

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
    return (
      <Provider store={this.props.store}>
        <div style={{height: '100%'}}>
          <Router history={browserHistory}>
            {this.props.routes}
          </Router>
          {this.devTools}
        </div>
      </Provider>
    );
  }
}
