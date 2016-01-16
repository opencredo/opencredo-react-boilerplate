/* @flow */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, Nav} from 'react-bootstrap';
import debug from 'debug';

import config from '../../app-config';
import UserDropdownMenu from 'components/UserDropdownMenu/UserDropdownMenu';
import {logoutRequest} from 'redux/modules/auth/auth-actions';

if (__DEBUG__) {
  debug.enable('profile-page:*');
}


class ProfileLayoutHeader extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };

  render() {
    return (
      <Navbar staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">{config.name}</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li role="presentation">
              <Link activeClassName="active" to="about">About Us</Link>
            </li>
            <UserDropdownMenu user={this.props.user} logout={this.props.logout} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({user: state.auth.user});
const mapDispatchToProps = {logout: logoutRequest};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileLayoutHeader);
