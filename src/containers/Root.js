import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
  };

  // redux devtools pane
  get devTools() {
    let returnValue = <span />;

    if (DEVELOPMENT) {
      const DevTools = require('./DevTools');

      returnValue = <DevTools />;
    }

    return returnValue;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={this.props.history}>
            {this.props.routes}
          </Router>
          {this.devTools}
        </div>
      </Provider>
    );
  }
}
