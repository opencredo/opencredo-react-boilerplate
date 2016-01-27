/* @flow */
import React, { PropTypes, Component } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { reduxForm } from 'redux-form';
import styles from './ProfileEditForm.scss';
import debug from 'debug';
import { autobind } from 'core-decorators';

if (__DEBUG__) {
  debug.enable('profile-edit-form:*');
}

const log = debug('profile-edit-form:debug');

class ProfileEditForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    values: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    handleUpdate: PropTypes.func.isRequired,
  };

  @autobind
  onUpdateClick() {
    log('onUpdateClick(): user:', this.props.user);
    this.props.handleUpdate(Object.assign({}, this.props.user, this.props.values));
  }

  render(): Component {
    const { fields: { givenName, familyName, nickname, email, emailVerified } } = this.props;

    return (
      <div className={styles.container}>
        <form onSubmit={this.onUpdateClick}>
          <img className={styles.picture} src={this.props.user.picture}/>
          <div className={styles.details}>
            <div className={styles.fullName}>
              <input type="text" placeholder="given name" {...givenName} />
              <input type="text" placeholder="family name" {...familyName}/>
            </div>
            <div>
              <input type="text" placeholder="nickname" {...nickname}/>
            </div>
            <div>
              <input type="text" placeholder="email" {...email}/>
            </div>
            <div>
              <label>
                <input type="checkbox" {...emailVerified}/>
                <FormattedMessage
                  id={'profile.form.email_verified.label'}
                  defaultMessage="Email verified"
                />
              </label>
            </div>
            <div className={styles.updateButton}>
              <Button bsStyle="primary" onClick={this.onUpdateClick}>Update</Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const reduxFormConfig: Object = {
  fields: ['givenName', 'familyName', 'nickname', 'email', 'emailVerified'],
  form: 'editProfile',
};

const mapStateToProps = (state, props) => ({ initialValues: props.user });

export default reduxForm(reduxFormConfig, mapStateToProps)(ProfileEditForm);
