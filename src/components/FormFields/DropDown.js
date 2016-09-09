/* @flow */
import React, { PropTypes, Element } from 'react';
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap';

class DropDown extends React.Component {
  static displayName = 'DropDown';
  static propTypes = {
    label: PropTypes.string.isRequired,
    field: PropTypes.object.isRequired,
    values: PropTypes.array.isRequired,
  };

  render(): Element<any> {
    const { field, label, values } = this.props;

    return (
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>{label}</ControlLabel>
        <FormControl componentClass="select" placeholder="select" { ...field }>
          {values.map(value => <option key={ value } value={ value }>{value}</option>)}
        </FormControl>
      </FormGroup>
    );
  }
}

export default DropDown;
