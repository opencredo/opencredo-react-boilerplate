import React, { PropTypes, Component } from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { changeLanguage } from 'redux/modules/language/language';
import { connect } from 'react-redux';
import find from 'lodash/find';

const supportedLanguages = [
  {
    id: 'lang.en',
    key: 'en',
    description: 'English',
    defaultMessage: 'English',
  },
  {
    id: 'lang.es',
    key: 'es',
    description: 'Español',
    defaultMessage: 'Español',
  },
];

class LanguageSelectionDropdown extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  };

  languageText(lang) {
    return <FormattedMessage {...lang} />;
  }

  handleLanguageChange = (lang: string) => () =>
    this.props.dispatch(changeLanguage(lang));

  render() {
    const currentLanguage = find(supportedLanguages, { key: this.props.language });

    return (
      <NavDropdown id="language-menu" title={this.languageText(currentLanguage)}>
        {supportedLanguages.map(lang =>
          <MenuItem key={lang.id} onClick={this.handleLanguageChange(lang.key)}>
            {this.languageText(lang)}
          </MenuItem>
        )}
      </NavDropdown>
    );
  }
}

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(LanguageSelectionDropdown);
