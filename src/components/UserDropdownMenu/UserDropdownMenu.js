import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import DropdownProfileCard from '../../components/DropdownProfileCard/DropdownProfileCard';
import { links } from '../../shared/links';

const UserDropdownMenu = (props) => {
  const { name, picture, nickname } = props.user;

  return (
    <NavDropdown id="user-menu" title={ name }>
      <DropdownProfileCard picture={ picture } name={ name } nickname={ nickname } />
      <MenuItem divider />
      <NavItem onClick={ props.logout }>
        <FormattedMessage { ...links.logOut } />
      </NavItem>
    </NavDropdown>
  );
};

UserDropdownMenu.displayName = 'UserDropdownMenu';
UserDropdownMenu.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserDropdownMenu;
