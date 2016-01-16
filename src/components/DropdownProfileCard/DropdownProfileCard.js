/*@flow*/
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styles from './DropdownProfileCard.scss';

type props = {
  picture: string;
  name: string;
  nickname: string;
}

const DropdownProfileCard = ({picture, name, nickname}: props) => {
  return (
    <Link to="/profile" className={styles.container}>
      <img className={styles.picture} src={picture} />
      <span className={styles.username}>{name}</span>
      <span className={styles.nickname}>{nickname}</span>
    </Link>
  );
};

DropdownProfileCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string,
};

export default DropdownProfileCard;
