import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import UserDropdownMenu from 'components/UserDropdownMenu/UserDropdownMenu';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { loginSuccess, logoutRequest } from 'redux/modules/auth/auth-actions';
import debug from 'debug';
import LanguageSelectionDropdown from '../LanguageSelectionDropdown/LanguageSelectionDropdown';
import { links } from 'shared/links';


const log = debug('app:core-layout-header');

class MainHeader extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };

  @autobind
  onLogin() {
    this.props.dispatch(loginSuccess());
  }

  @autobind
  onLogout() {
    this.props.dispatch(logoutRequest());
  }

  willReceiveProps(props) {
    log('core-layout-header will receive props', props);
  }

  render() {
    return (
      <Navbar staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <FormattedMessage {...links.home} />
              { /* The above is equivalent to
                <FormattedMessage id={links.home.id}
                                  description={links.home.description}
                                  defaultMessage={links.home.defaultMessage} /> */ }
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LanguageSelectionDropdown />
            <li role="presentation">
              <Link activeClassName="active" to="/pages/about-us">
                <FormattedMessage {...links.aboutUs} />
              </Link>
            </li>
            {this.props.isAuthenticated ?
              <UserDropdownMenu user={this.props.user} logout={this.onLogout} />
              :
              <li role="presentation">
                <a onClick={this.onLogin}>
                  <FormattedMessage {...links.login} />
                </a>
              </li>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  language: state.language,
});

export default connect(mapStateToProps)(MainHeader);
