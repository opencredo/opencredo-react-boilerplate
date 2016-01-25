import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import styles from './ProfileEdit.scss';
import debug from 'debug';

if (__DEBUG__) {
  debug.enable('profile-edit:*');
}

const log = debug('profile-edit:debug');

const ProfileEdit = ({ user, handleUpdate }) => {
  log('user:', user);

  const onUpdateClick = () => {
    log('onUpdateClick(): user:', user);
    handleUpdate(user);
  };

  return (
    <div className={styles.container}>
      <img className={styles.picture} src={user.picture}/>
      <div className={styles.details}>
        <div className={styles.fullName}>
          <div className={styles.givenName}>{user.givenName}</div>&nbsp;
          <div className={styles.familyName}>{user.familyName}</div>
        </div>
        <div className={styles.nickname}>{user.nickname}</div>
        <div className={styles.email}>{user.email}</div>
        <div className={styles.updateButton}>
          <Button bsStyle="primary" onClick={onUpdateClick}>Update</Button>
        </div>
      </div>
    </div>
  );
};

ProfileEdit.propTypes = {
  user: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default ProfileEdit;
