/* @flow */
import React, { PropTypes, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import FormMessages from 'redux-form-validation';
import { messages } from 'shared/forms';

const FormErrorMessages = (props: Object): ReactElement => {
  return (
    <FormMessages
      tagName="span"
      errorCount={1}
      field={props.field}
    >
      <span when="required" className="help-block">
        <FormattedMessage {...messages.error.required} />
      </span>
      <span when="email" className="help-block">
        <FormattedMessage {...messages.error.email} />
      </span>
      <span when="minLength" className="help-block">
        <FormattedMessage values={{ minLength: props.minLength }} {...messages.error.minLength} />
      </span>
      <span when="maxLength" className="help-block">
        <FormattedMessage values={{ maxLength: props.maxLength }} {...messages.error.maxLength} />
      </span>
    </FormMessages>
  );
};

FormErrorMessages.propTypes = {
  field: PropTypes.object.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};

export default FormErrorMessages;
