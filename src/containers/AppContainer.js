import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { wrapper, container } from '../styles/styleGuide';
import { IntlProvider } from 'react-intl';
import DocumentTitle from 'components/DocumentTitle';
import messages from 'translations';
import ThemeSelect from '../components/Theme';
import 'styles/app.scss';

const mapStateToProps = ({ language, documentTitle, theme }) => ({ language, documentTitle, theme });
class AppContainer extends Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    documentTitle: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
    theme: PropTypes.element.isRequired,
    updateThemeColor: PropTypes.func.isRequired,
  };

  render() {
    const { language, children } = this.props;

    return (
      <div style={wrapper}>
        <div
          style={{
            ...container,
            background: this.props.theme.color,
          }}
        >
        </div>
        <IntlProvider locale={ language } messages={ messages[language] }>
          <DocumentTitle title={this.props.documentTitle}>
            { children }
          </DocumentTitle>
        </IntlProvider>
        <ThemeSelect theme={ this.props.theme } updateThemeColor={ this.props.updateThemeColor }/>
      </div>

    );
  }
}

export default connect(mapStateToProps)(AppContainer);
