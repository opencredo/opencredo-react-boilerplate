import React from 'react';
import {Link} from 'react-router';
import styles from './LandingPageHeader.scss';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

class LandingPageHeader extends React.Component {
  static propTypes = {
    isAuthenticated: React.PropTypes.bool,
  };

  render() {
    return (
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className={styles.brand}>opencredo-react-boilerplate</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li role="presentation"><Link activeClassName="active" to="about">About Us</Link></li>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LandingPageHeader;
