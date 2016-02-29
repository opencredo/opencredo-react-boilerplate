/* @flow */
import React, { PropTypes, Component } from 'react';
import { Button, Input, Row, Col } from 'react-bootstrap';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { generateValidation } from '@mcalthrop/redux-form-validation';
import TextInput from 'components/FormFields/TextInput';
import HorizontalRadioGroup from 'components/FormFields/HorizontalRadioGroup';
import DropDown from 'components/FormFields/DropDown';
import FormErrorMessages from 'components/FormFields/FormErrorMessages';
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
    return this.props.pristine;
  }

  render(): Component {
    const {
      fields: {
        givenName,
        familyName,
        nickname,
        email,
        emailVerified,
        age,
        gender,
        locale,
        notes,
        },
      } = this.props;
    const { formatMessage } = this.props.intl;
    const genderValues = [
      {
        label: formatMessage(messages.gender.male.label),
        value: MALE,
      },
      {
        label: formatMessage(messages.gender.female.label),
        value: FEMALE,
      },
    ];

    // in a real app, the locales would be populated via service call:
    const locales: string[] = ['en-GB', 'en-AU', 'es-ES', 'es-CR', 'es-NI'];

    return (
      <div className={styles.container}>
        <form onSubmit={this.onUpdateClick}>
          <Row>
            <Col sm={2}>
              <img className={styles.picture} src={this.props.user.picture} />
            </Col>
            <Col sm={5}>
              <TextInput field={givenName} placeholder={formatMessage(messages.givenName.placeholder)}>
                <FormErrorMessages field={givenName} minLength={validations.givenName.minLength} />
              </TextInput>
              <TextInput field={familyName} placeholder={formatMessage(messages.familyName.placeholder)}>
                <FormErrorMessages field={familyName} minLength={validations.familyName.minLength} />
              </TextInput>
              <TextInput field={nickname} placeholder={formatMessage(messages.nickname.placeholder)}>
                <FormErrorMessages field={nickname} maxLength={validations.nickname.maxLength} />
              </TextInput>
              <TextInput field={email} type="email" placeholder={formatMessage(messages.email.placeholder)}>
                <FormErrorMessages field={email} />
              </TextInput>
              <Input type="checkbox" label={formatMessage(messages.emailVerified.label)} {...emailVerified} />
            </Col>
            <Col sm={5}>
              <Row>
                <Col sm={3}>
                  <TextInput field={age} type="number" placeholder={formatMessage(messages.age.placeholder)}>
                    <FormErrorMessages field={age} min={validations.age.min} max={validations.age.max} />
                  </TextInput>
                </Col>
                <Col sm={9}>
                  <HorizontalRadioGroup field={gender} values={genderValues} />
                </Col>
              </Row>
              <DropDown label={formatMessage(messages.locale.label)} field={locale} values={locales} />
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
              {
                // Need to include the preceding non-breaking space, because when React renders the HTML,
                // there is no gap in the markup between the buttons - which results in the buttons being
                // flush up against each other.
              }
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
