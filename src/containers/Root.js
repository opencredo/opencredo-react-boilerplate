/* eslint global-require: 0 */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends React.Component {
  static displayName = 'Root';
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
    const { history, store, routes } = this.props;

    return (
      <Provider store={ store }>
        <div style={ { height: '100%' } }>
          <Router history={ history } routes={ routes } />
          {this.devTools}
        </div>
      </Provider>
    );
  }
}
