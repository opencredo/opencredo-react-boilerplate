/* @flow */
import React, { PropTypes, Component } from 'react';
import { Button, Input, Row, Col } from 'react-bootstrap';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import FormMessages, { generateValidation } from 'redux-form-validation';
import validations from './ProfileEditForm.validations';
import { reduxForm } from 'redux-form';
import { messages } from './ProfileEditForm.i18n';
import styles from './ProfileEditForm.scss';
import { autobind } from 'core-decorators';

const MALE: string = 'male';
const FEMALE: string = 'female';

class ProfileEditForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    values: PropTypes.object.isRequired,
    pristine: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    handleUpdate: PropTypes.func.isRequired,
  };

  @autobind
  onUpdateClick() {
    this.props.handleUpdate(Object.assign({}, this.props.user, this.props.values));
  }

  @autobind
  onResetClick() {
    this.props.resetForm();
  }

  isUpdateButtonDisabled(): boolean {
    return this.props.pristine || this.props.invalid;
  }

  isResetButtonDisabled(): boolean {
    return this.props.pristine || this.props.invalid;
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
            <Col sm={5}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder={formatMessage(messages.givenName.placeholder)} {...givenName} />
                <FormMessages tagName="span" errorCount={1} field={givenName}>
                  <span when="required" className="help-block">
                    <FormattedMessage {...messages.error.required} />
                  </span>
                  <span when="bugfixer">
                    There is a bug, whereby if the `FormMessages` element has only one child, no errors are displayed,
                    even when there is an error.
                  </span>
                </FormMessages>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder={formatMessage(messages.familyName.placeholder)} {...familyName} />
                <FormMessages tagName="span" errorCount="1" field={familyName}>
                  <span when="required" className="help-block">
                    <FormattedMessage {...messages.error.required} />
                  </span>
                  <span when="bugfixer">
                    There is a bug, whereby if the `FormMessages` element has only one child, no errors are displayed,
                    even when there is an error.
                  </span>
                </FormMessages>
              </div>
              <Input type="text" placeholder={formatMessage(messages.nickname.placeholder)} {...nickname} />
              <div className="form-group">
                <input type="text" className="form-control" placeholder={formatMessage(messages.email.placeholder)} {...email} />
                <FormMessages tagName="span" errorCount="1" field={email}>
                  <span when="required" className="help-block">
                    <FormattedMessage {...messages.error.required} />
                  </span>
                  <span when="email" className="help-block">
                    <FormattedMessage {...messages.error.email} />
                  </span>
                </FormMessages>
              </div>
              <Input type="checkbox" label={formatMessage(messages.emailVerified.label)} {...emailVerified} />
            </Col>
            <Col sm={5}>
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
            <Col sm={2} />
            <Col sm={10}>
              <Button
                bsStyle="primary"
                onClick={this.onUpdateClick}
                disabled={this.isUpdateButtonDisabled()}
              >
                <FormattedMessage {...messages.save.label} />
              </Button>&nbsp;
              <Button
                bsStyle="default"
                onClick={this.onResetClick}
                disabled={this.isResetButtonDisabled()}
              >
                <FormattedMessage {...messages.reset.label} />
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

const reduxFormConfig: Object = {
  form: 'editProfile',
  ...generateValidation(validations),
};

const mapStateToProps = (state, props) => ({ initialValues: props.user });

export default reduxForm(reduxFormConfig, mapStateToProps)(injectIntl(ProfileEditForm));
