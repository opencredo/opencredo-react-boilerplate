/* @flow */
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

class TextInput extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    children: PropTypes.object,
    placeholder: PropTypes.string,
    type: PropTypes.string,
  };

  render(): Component {
    const inputClasses = classNames({
      'form-group': true,
      'has-error': this.props.field.invalid,
    });
    const type = this.props.type || 'text';

    return (
      <div className={inputClasses}>
        <input
          type={type}
          className="form-control"
          placeholder={this.props.placeholder}
          {...this.props.field}
        />
        { this.props.children }
      </div>
    );
  }
}

export default TextInput;
