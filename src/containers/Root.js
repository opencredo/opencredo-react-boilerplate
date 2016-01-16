import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

import MainSectionRoutes from 'routes/MainSectionRoutes';
import ProfileSectionRoutes from 'routes/ProfileSectionRoutes';

export default class Root extends React.Component {

  static propTypes = {
    history: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired,
  };

  constructor(props, state, c) {
    super(props, state, c);
  }

  // redux devtools pane
  get devTools() {
    if (__DEBUG__) {
      const DevTools = require('containers/DevTools').default;
      return <DevTools />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{height: '100%'}}>
          <Router history={this.props.history} store={this.props.store}>
            {MainSectionRoutes}
            {ProfileSectionRoutes}
          </Router>
        </div>
      </Provider>
    );
  }
}
