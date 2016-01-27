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
const MALE: string = 'male';
const FEMALE: string = 'female';

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
    const { fields: { givenName, familyName, nickname, email, emailVerified, gender, locale, notes } } = this.props;
    // in a real app, the locales would be populated via service call:
    const locales: string[] = ['en-GB', 'en-AU', 'es-ES', 'es-CR', 'es-NI'];

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
            <div>
              <label>
                <FormattedMessage
                  id={'profile.form.gender.label'}
                  defaultMessage="GENDER"
                />
              </label>
              <div>
                <label>
                  <input type="radio" {...gender} value={MALE} checked={gender.value === MALE}/>
                  <FormattedMessage
                    id={'profile.form.gender.male.label'}
                    defaultMessage="MALE"
                  />
                </label>
                <label>
                  <input type="radio" {...gender} value={FEMALE} checked={gender.value === FEMALE}/>
                  <FormattedMessage
                    id={'profile.form.gender.female.label'}
                    defaultMessage="FEMALE"
                  />
                </label>
              </div>
              <div>
                <label>
                  <FormattedMessage
                    id={'profile.form.locale.label'}
                    defaultMessage="LOCALE"
                  />
                </label>
                <div>
                  <select {...locale} value={locale.value || ''}>
                    <option />
                    {locales.map(_locale => <option key={_locale} value={_locale}>{_locale}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label>
                <FormattedMessage
                  id={'profile.form.notes.label'}
                  defaultMessage="NOTES"
                />
              </label>
              <div>
                <textarea {...notes} value={notes.value || ''} />
              </div>
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
  fields: ['givenName', 'familyName', 'nickname', 'email', 'emailVerified', 'gender', 'locale', 'notes'],
  form: 'editProfile',
};

const mapStateToProps = (state, props) => ({ initialValues: props.user });

export default reduxForm(reduxFormConfig, mapStateToProps)(ProfileEditForm);
