import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { loginSuccess, logoutRequest } from 'redux/modules/auth/auth-actions';
import config from 'app-config';
import Login from 'components/Login/Login';
import debug from 'debug';

const log = debug('app:core-layout-header');


class MainHeader extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isAuthenticated: PropTypes.bool,
  };

  componentWillUpdate() {
    log('core-layout-header will update');
  }

  @autobind
  onLogin() {
    this.props.dispatch(loginSuccess());
  }

  @autobind
  onLogout() {
    this.props.dispatch(logoutRequest());
  }

  willReceiveProps(props) {
    log('core-layout-header will receive props', props);
  }


  render() {
    return (
      <Navbar staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">{config.name}</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li role="presentation">
              <Link activeClassName="active" to="/pages/about-us">About Us</Link>
            </li>
            <li role="presentation">
              {this.props.isAuthenticated ?
                <a onClick={this.onLogout}>Logout</a>
                :
                <Login onClick={this.onLogin}/>
              }
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(MainHeader);
