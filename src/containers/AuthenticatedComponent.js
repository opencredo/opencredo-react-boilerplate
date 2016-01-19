import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';


const requireAuthentication = (Component) => {
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

  class AuthenticatedComponent extends Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool.isRequired,
    };

    componentWillMount() {
      this.checkAuth(this.props);
    }

    componentWillReceiveProps(props) {
      this.checkAuth(props);
    }

    checkAuth(props) {
      if (!props.isAuthenticated) {
        this.redirectToLogin();
      }
    }

    redirectToLogin() {
      // this would dispatch a notification then a route change.
      this.props.dispatch(routeActions.replace({ pathname: '/' }));
    }

    render() {
      return (
        <div>
          { this.props.isAuthenticated ? <Component {...this.props}/> : null }
        </div>
      );
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export {
  requireAuthentication,
};
