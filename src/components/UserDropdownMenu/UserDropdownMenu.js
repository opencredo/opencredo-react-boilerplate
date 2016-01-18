import React, { PropTypes } from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import DropdownProfileCard from 'components/DropdownProfileCard/DropdownProfileCard';

const UserDropdownMenu = (props) => {
  const { name, picture, nickname } = props.user;

  return (
    <NavDropdown id="user-menu" title={name}>
      <li>
        <DropdownProfileCard picture={picture} name={name} nickname={nickname} />
      </li>
      <MenuItem divider />
      <li>
        <Link to="/account">Profile</Link>
      </li>
      <MenuItem divider />
      <li>
        <a onClick={props.logout}>Sign out</a>
      </li>
    </NavDropdown>
  );
};

UserDropdownMenu.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserDropdownMenu;
