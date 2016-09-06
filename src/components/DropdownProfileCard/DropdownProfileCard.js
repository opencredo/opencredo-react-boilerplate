import React, { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';
import styles from './DropdownProfileCard.scss';

const DropdownProfileCard = ({ picture, name, nickname }) =>
  (
  <LinkContainer to="/profile/edit" className={ styles.container }>
    <NavItem className={ styles.container }>
      <img className={ styles.picture } src={ picture } />
      <span className={ styles.username }>{name}</span>
      <span className={ styles.nickname }>{nickname}</span>
    </NavItem>
  </LinkContainer>
  );

DropdownProfileCard.displayName = 'DropdownProfileCard';
DropdownProfileCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string,
};

export default DropdownProfileCard;
