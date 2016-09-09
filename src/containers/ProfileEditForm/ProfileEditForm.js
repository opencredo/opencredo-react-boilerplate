/* eslint no-restricted-syntax: 0 */
/* @flow */
import React, { PropTypes, Element } from 'react';
import { Button, Checkbox, FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { reduxForm } from 'redux-form';
import { autobind } from 'core-decorators';
import { generateValidation } from 'redux-form-validation';

import TextInput from '../../components/FormFields/TextInput';
import HorizontalRadioGroup from '../../components/FormFields/HorizontalRadioGroup';
import DropDown from '../../components/FormFields/DropDown';
import FormErrorMessages from '../../components/FormFields/FormErrorMessages';
import validations from './ProfileEditForm.validations';

import { messages } from './ProfileEditForm.i18n';
import styles from './ProfileEditForm.scss';

const MALE: string = 'male';
const FEMALE: string = 'female';

class ProfileEditForm extends React.Component {
  static displayName = 'ProfileEditForm';
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

  render(): Element<any> {
    const fields = Object.assign({}, this.props.fields);
    for (const prop in fields) {
      if ({}.hasOwnProperty.call(fields, prop)) {
        delete fields[prop].initialValue;
        delete fields[prop].autofill;
        delete fields[prop].onUpdate;
        delete fields[prop].valid;
        delete fields[prop].invalid;
        delete fields[prop].dirty;
        delete fields[prop].pristine;
        delete fields[prop].active;
        delete fields[prop].touched;
        delete fields[prop].visited;
        delete fields[prop].autofilled;
      }
    }

    const { givenName, familyName, nickname, email, emailVerified, age, gender, locale, notes } = fields;
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
      <div className={ styles.container }>
        <form onSubmit={ this.onUpdateClick }>
          <Row>
            <Col sm={ 2 }>
              <img className={ styles.picture } src={ this.props.user.picture } />
            </Col>
            <Col sm={ 5 }>
              <TextInput field={ givenName } placeholder={ formatMessage(messages.givenName.placeholder) }>
                <FormErrorMessages field={ givenName } minLength={ validations.givenName.minLength } />
              </TextInput>
              <TextInput field={ familyName } placeholder={ formatMessage(messages.familyName.placeholder) }>
                <FormErrorMessages field={ familyName } minLength={ validations.familyName.minLength } />
              </TextInput>
              <TextInput field={ nickname } placeholder={ formatMessage(messages.nickname.placeholder) }>
                <FormErrorMessages field={ nickname } maxLength={ validations.nickname.maxLength } />
              </TextInput>
              <Row>
                <FormGroup controlId="formControlsPersonal">
                  <Col sm={ 8 }>
                    <ControlLabel>{formatMessage(messages.email.label)}</ControlLabel>
                    <TextInput field={ email } type="email" placeholder={ formatMessage(messages.email.placeholder) }>
                      <FormErrorMessages field={ email } />
                    </TextInput>
                  </Col>
                  <Col sm={ 4 }>
                    <ControlLabel>{formatMessage(messages.emailVerified.label)}</ControlLabel>
                    <Checkbox checked={ emailVerified.checked } readOnly>
                      {formatMessage(messages.emailVerified.placeholder)}
                    </Checkbox>
                  </Col>
                </FormGroup>
              </Row>
            </Col>
            <Col sm={ 5 }>
              <Row>
                <FormGroup controlId="formControlsPersonal">
                  <Col sm={ 4 }>
                    <ControlLabel>{formatMessage(messages.age.placeholder)}</ControlLabel>
                    <TextInput field={ age } type="number" placeholder={ formatMessage(messages.age.placeholder) }>
                      <FormErrorMessages field={ age } min={ validations.age.min } max={ validations.age.max } />
                    </TextInput>
                  </Col>
                  <Col sm={ 8 }>
                    <ControlLabel>{formatMessage(messages.gender.label)}</ControlLabel>
                    <HorizontalRadioGroup field={ gender } values={ genderValues } />
                  </Col>
                </FormGroup>
              </Row>
              <DropDown label={ formatMessage(messages.locale.label) } field={ locale } values={ locales } />
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>{formatMessage(messages.notes.label)}</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" { ...notes } />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={ 2 } />
            <Col sm={ 10 }>
              <Button
                bsStyle="primary"
                onClick={ this.onUpdateClick }
                disabled={ this.isUpdateButtonDisabled() }
              >
                <FormattedMessage { ...messages.save.label } />
              </Button>&nbsp;
              {
                // Need to include the preceding non-breaking space, because when React renders the HTML,
                // there is no gap in the markup between the buttons - which results in the buttons being
                // flush up against each other.
              }
              <Button
                bsStyle="default"
                onClick={ this.onResetClick }
                disabled={ this.isResetButtonDisabled() }
              >
                <FormattedMessage { ...messages.reset.label } />
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
