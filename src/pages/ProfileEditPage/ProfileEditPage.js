/* @flow */

import debug from 'debug';
import React, { PropTypes, Component, ReactComponent } from 'react';
import { User } from 'declarations/app';
import ProfileEditForm from 'containers/ProfileEditForm/ProfileEditForm';
import { updateUser } from 'redux/modules/user/user-actions';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

if (__DEBUG__) {
  debug.enable('profile-edit-page:*');
}

const log = debug('profile-edit-page:debug');

export class ProfileEditPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  @autobind
  handleUpdate(user: User) {
    log('handleUpdate(): user:', user);
    this.props.dispatch(updateUser(user));
  }

  render(): ReactComponent {
    return (
      <div className="content container">
        <h2 className="box-title">Edit Profile</h2>

        <div className="box-content">
          <ProfileEditForm user={this.props.user} handleUpdate={this.handleUpdate}/>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProfileEditPage);
