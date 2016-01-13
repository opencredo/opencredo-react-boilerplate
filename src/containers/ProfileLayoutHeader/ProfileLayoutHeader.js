import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import debug from 'debug';

import config from 'app-config';
import DropdownProfileCard from 'components/DropdownProfileCard/DropdownProfileCard';

if (__DEBUG__) {
  debug.enable('profile-page:*');
}


class ProfileLayoutHeader extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };

  dropdownTitle() {
    return (
      <span>
        <Glyphicon glyph="user" />
        <span>You</span>
      </span>
    );
  }

  render() {
    const {picture, name, nickname} = this.props.user || {};


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

            <NavDropdown id="user-menu" title={this.dropdownTitle()}>
              <li>
                <DropdownProfileCard picture={picture} name={name} nickname={nickname} />
              </li>
              <MenuItem divider />
              <li>
                <Link to="/">Home</Link>
              </li>
              <MenuItem divider />
              <li>
                <a onClick={this.logout}>Sign out</a>
              </li>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user || {},
  };
};

export default connect(mapStateToProps)(ProfileLayoutHeader);
