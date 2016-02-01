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
    </FormMessages>
  );
};

FormErrorMessages.propTypes = {
  field: PropTypes.object.isRequired,
};

export default FormErrorMessages;
