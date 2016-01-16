import React, {PropTypes} from 'react';
import {Glyphicon, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';
import DropdownProfileCard from 'components/DropdownProfileCard/DropdownProfileCard';

const DropdownTitle = ({name}) => (
  <span>
    <Glyphicon glyph="user" />
    {name}
  </span>
);

DropdownTitle.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

const UserDropdownMenu = ({user, logout}) => {
  return (
    <NavDropdown id="user-menu" title={new DropdownTitle(user.name)}>
      <li>
        <DropdownProfileCard picture={user.picture} name={user.name} nickname={user.nickname} />
      </li>
      <MenuItem divider />
      <li>
        <Link to="/">Home</Link>
      </li>
      <MenuItem divider />
      <li>
        <a onClick={logout}>Sign out</a>
      </li>
    </NavDropdown>
  );
};

UserDropdownMenu.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserDropdownMenu;
