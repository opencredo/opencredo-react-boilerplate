import React from 'react';
import {Link} from 'react-router';
import styles from './CoreLayout.scss';
import {Navbar, Nav} from 'react-bootstrap';

class CoreLayoutHeader extends React.Component {
  static propTypes = {
    isAuthenticated: React.PropTypes.bool,
  };

  render() {
    return (
      <Navbar staticTop fluid className={styles.header}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className={styles.brand}>React-Bootstrap</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li role="presentation">
              <Link activeClassName="active" to="about">About Us</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CoreLayoutHeader;
