/* @flow */
import React, { PropTypes, Component } from 'react';
import { Input } from 'react-bootstrap';

// Support for radio buttons in react-bootstrap is currently lame.
// It's worth watching this though:
// https://github.com/react-bootstrap/react-bootstrap/pull/962
class HorizontalRadioGroup extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired,
  };

  render(): Component {
    const { field, values } = this.props;

    return (
      <Input>
        {
          values.map(value =>
            <label className="radio-inline">
              <input
                type="radio"
                className="radio"
                {...field}
                value={value.value}
                checked={field.value === value.value}
              />
              {value.label}
            </label>
          )
        }
      </Input>
    );
  }
}

export default HorizontalRadioGroup;
