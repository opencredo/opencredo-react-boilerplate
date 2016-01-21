import React, { PropTypes } from 'react';
import styles from './ProfileEdit.scss';
import debug from 'debug';

if (__DEBUG__) {
  debug.enable('profile-edit:*');
}

const log = debug('profile-edit:debug');

const ProfileEdit = ({ user }) => {
  log('user:', user);

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
      </div>
    </div>
  );
};

ProfileEdit.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfileEdit;
