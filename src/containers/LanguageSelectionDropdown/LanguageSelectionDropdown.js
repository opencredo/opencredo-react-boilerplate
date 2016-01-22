import React, { PropTypes, Component } from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { changeLanguage } from 'redux/modules/language/language';
import { connect } from 'react-redux';
import find from 'lodash/find';

const supportedLanguages = [
  {
    id: 'lang_en',
    key: 'en',
    description: 'English',
    defaultMessage: 'English',
  },
  {
    id: 'lang_es',
    key: 'es',
    description: 'Spanish',
    defaultMessage: 'Spanish',
  },
];

class LanguageSelectionDropDown extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  };

  languageText(lang) {
    return <FormattedMessage {...lang} />;
  }

  handleLanguageChange = (lang: string) => {
    return () => this.props.dispatch(changeLanguage(lang));
  };

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

export default connect(mapStateToProps)(LanguageSelectionDropDown);
