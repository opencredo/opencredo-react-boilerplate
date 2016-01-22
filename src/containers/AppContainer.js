import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from 'translations';
import 'styles/app.scss';

const mapStateToProps = ({ language }) => ({ language });
class AppContainer extends Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { language, children } = this.props;

    return (
      <IntlProvider locale={language} messages={messages[language]}>
        {children}
      </IntlProvider>
    );
  }
}

export default connect(mapStateToProps)(AppContainer);
