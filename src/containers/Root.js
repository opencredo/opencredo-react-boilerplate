import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
  };

  constructor(props, state, c) {
    super(props, state, c);
  }

  // redux devtools pane
  get devTools() {
    if (DEVELOPMENT) {
      const DevTools = require('./DevTools');
      return <DevTools />;
    }
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
