import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {ADMIN_ROLE} from 'core/constants';

class Sidebar extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.object,
    isAdmin: PropTypes.bool,
  };

  render() {
    return (
      <ul className="sidebar">
        <li>
          <Link to="/profile" activeClassName="active">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/profile/spaces" activeClassName="active">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/profile/Profile" activeClassName="active">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/favourites" activeClassName="active">
            Favourites
          </Link>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  isAdmin: (state.auth.user.roles.indexOf(ADMIN_ROLE) >= 0),
});

export default connect(mapStateToProps)(Sidebar);
