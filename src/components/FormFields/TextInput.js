/* @flow */
import React, { PropTypes, Element } from 'react';
import classNames from 'classnames';

class TextInput extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    children: PropTypes.object,
    placeholder: PropTypes.string,
    type: PropTypes.string,
  };

  render(): Element {
    const inputClasses = classNames({
      'form-group': true,
      'has-error': this.props.field.invalid,
    });
    const type = this.props.type || 'text';
    const { field, placeholder, children } = this.props;

    return (
      <div className={inputClasses}>
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          {...field}
        />
        { children }
      </div>
    );
  }
}

export default TextInput;
