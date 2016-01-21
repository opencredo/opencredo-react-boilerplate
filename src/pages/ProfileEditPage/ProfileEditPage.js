import React, { PropTypes } from 'react';
import ProfileEdit from 'components/ProfileEdit/ProfileEdit';
import { connect } from 'react-redux';

export class ProfileEditPage extends React.Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    return (
      <div className="content">
        <h2 className="box-title">Edit Profile</h2>

        <div className="box-content">
          <ProfileEdit user={this.props.user}/>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileEditPage);
