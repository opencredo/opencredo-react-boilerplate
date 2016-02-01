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
      <span when="bugfixer">
        {
          // Note: there is a bug whereby if the `FormMessages` element has only one child,
          // no errors are displayed, even when there is a validation error.
          // The workaround is to include another child element (ie, this one) that will
          // never be matched, and hence will never be displayed.
        }
      </span>
    </FormMessages>
  );
};

FormErrorMessages.propTypes = {
  field: PropTypes.object.isRequired,
};

export default FormErrorMessages;
