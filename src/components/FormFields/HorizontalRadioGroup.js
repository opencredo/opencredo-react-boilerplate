/* @flow */
import React, { PropTypes, Element } from 'react';

// Support for radio buttons in react-bootstrap is currently lame.
// It's worth watching this though:
// https://github.com/react-bootstrap/react-bootstrap/pull/962
class HorizontalRadioGroup extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired,
  };

  render(): Element {
    const { field, values } = this.props;

    return (
      <div className="form-group">
        {
          values.map(value =>
            <label className="radio-inline" key={`${field.name}-${value.value}`}>
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
      </div>
    );
  }
}

export default HorizontalRadioGroup;
