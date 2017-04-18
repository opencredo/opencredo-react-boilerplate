/* @flow */
import React, { PropTypes, Component } from 'react';
import { injectIntl } from 'react-intl';
import 'react-colors-picker/assets/index.css';
import ColorPicker from 'react-colors-picker';
import { corner } from './../styles/styleGuide';

type ThemeProps = {
  type: string;
  color: any;
  intl: {
    updateThemeColor: Function;
  };
};

class Theme extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    updateThemeColor: PropTypes.func.isRequired,
  };

  componentWillMount(): void {
    this.updateThemeColor(this.props);
  }

  componentWillUpdate(newProps: ThemeProps): void {
    this.updateThemeColor(newProps);
  }

  props: ThemeProps;
  render(): React.Element {
    return (
      <div style={ corner }>
        <ColorPicker
          onChange={ this.props.color }
        />
      </div>
    );
  }
}

export default injectIntl(Theme);
