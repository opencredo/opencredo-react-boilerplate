import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {wrapper, container} from '../styles/styleGuide';
import { IntlProvider } from 'react-intl';
import messages from 'translations';
import {updateThemeColor} from '../redux/modules/theme/themeActionCreators';
import ThemeSelect from '../components/theme/ThemeSelect';
import 'styles/app.scss';

const mapStateToProps = ({ language, theme }) => ({ language, theme });
class AppContainer extends Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    theme: PropTypes.object.isRequired,
  };

  render() {
    const { language, children, theme, updateThemeColor } = this.props;

    return (
    <div style={wrapper}>
      <div
        style={{
            ...container,
            background: theme.color
          }}
      >
      </div>
      <IntlProvider locale={language} messages={messages[language]}>
        {children}
      </IntlProvider>
      <ThemeSelect theme={theme} updateThemeColor={updateThemeColor} />
    </div>

    );
  }
}

//function select(state) {
//  return {
//    theme: state.theme
//  };
//}
//
//export default connect(
//  select,
//  {
//    updateThemeColor
//  }
//)(AppContainer);

export default connect(mapStateToProps)(AppContainer);
