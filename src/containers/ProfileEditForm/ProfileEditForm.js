/* @flow */
import React, { PropTypes, Component } from 'react';
import { Button, Input, Row, Col } from 'react-bootstrap';
import { intlShape, injectIntl } from 'react-intl';
import { reduxForm } from 'redux-form';
import { messages } from './ProfileEditForm.i18n';
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
    intl: intlShape.isRequired,
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
    const { formatMessage } = this.props.intl;
    // in a real app, the locales would be populated via service call:
    const locales: string[] = ['en-GB', 'en-AU', 'es-ES', 'es-CR', 'es-NI'];

    return (
      <div className={styles.container}>
        <form onSubmit={this.onUpdateClick}>
          <Row>
            <Col sm={2}>
              <img className={styles.picture} src={this.props.user.picture}/>
            </Col>
            <Col sm={3}>
              <Input type="text" placeholder={formatMessage(messages.givenName.placeholder)} {...givenName} />
              <Input type="text" placeholder={formatMessage(messages.familyName.placeholder)} {...familyName} />
              <Input type="text" placeholder={formatMessage(messages.nickname.placeholder)} {...nickname} />
              <Input type="text" placeholder={formatMessage(messages.email.placeholder)} {...email} />
              <Input type="checkbox" label={formatMessage(messages.emailVerified.label)} {...emailVerified} />
            </Col>
            <Col sm={3}>
              <Input>
                {
                  // Support for radio buttons in react-bootstrap is currently lame.
                  // It's worth watching this though:
                  // https://github.com/react-bootstrap/react-bootstrap/pull/962
                }
                <label className="radio-inline">
                  <input type="radio" className="radio" {...gender} value={MALE} checked={gender.value === MALE}/>
                  {formatMessage(messages.gender.male.label)}
                </label>
                <label className="radio-inline">
                  <input type="radio" className="radio" {...gender} value={FEMALE} checked={gender.value === FEMALE}/>
                  {formatMessage(messages.gender.female.label)}
                </label>
              </Input>
              <Input type="select" label={formatMessage(messages.locale.label)} {...locale}>
                {locales.map(_locale => <option key={_locale} value={_locale}>{_locale}</option>)}
              </Input>
              <Input type="textarea" label={formatMessage(messages.notes.label)} {...notes} />
            </Col>
          </Row>
          <Row>
            <Col sm={2}/>
            <Col sm={10}>
              <div className={styles.updateButton}>
                <Button bsStyle="primary" onClick={this.onUpdateClick}>Update</Button>
              </div>
            </Col>
          </Row>
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

export default reduxForm(reduxFormConfig, mapStateToProps)(injectIntl(ProfileEditForm));
