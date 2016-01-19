import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
  isAdmin: state.auth.isAdmin,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Sidebar);
