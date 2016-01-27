import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import DocumentTitle from 'components/DocumentTitle';
import messages from 'translations';
import 'styles/app.scss';

const mapStateToProps = ({ language, documentTitle }) => ({ language, documentTitle });
class AppContainer extends Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    documentTitle: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { language, children } = this.props;

    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <DocumentTitle title={this.props.documentTitle}>
          {children}
        </DocumentTitle>
      </IntlProvider>
    );
  }
}

export default connect(mapStateToProps)(AppContainer);
