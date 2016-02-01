/* @flow */
import React, { PropTypes, Component } from 'react';
import { Input } from 'react-bootstrap';

class DropDown extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    field: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired,
  };

  render(): Component {
    const { label, field, values } = this.props;

    return (
      <Input type="select" label={label} {...field}>
        {values.map(value => <option key={value} value={value}>{value}</option>)}
      </Input>
    );
  }
}

export default DropDown;
