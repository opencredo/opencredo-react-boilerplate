import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import classNames from 'classnames';


const requireAuthentication = (ComposedComponent) => {
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
      const { isAuthenticated } = this.props;
      const wrapperClass = classNames({
        'is-authenticated': isAuthenticated,
        'requires-authentication': !isAuthenticated,
      });

      return (
        <div className={wrapperClass}>
          { isAuthenticated ? <ComposedComponent {...this.props} /> : null }
        </div>
      );
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export {
  requireAuthentication,
};
