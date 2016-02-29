/* @flow */

import debug from 'debug';
import React, { PropTypes, Component, ReactComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { User } from 'declarations/app';
import ProfileEditForm from 'containers/ProfileEditForm/ProfileEditForm';
import { updateUser } from 'redux/modules/user/user-actions';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { messages } from './ProfileEditPage.i18n';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

if (__DEBUG__) {
  debug.enable('profile-edit-page:*');
}

const log = debug('profile-edit-page:debug');

export class ProfileEditPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(messages.title));
  }

  componentWillUnmount() {
    this.props.dispatch(resetDocumentTitle());
  }

  @autobind
  handleUpdate(user: User) {
    log('handleUpdate(): user:', user);
    this.props.dispatch(updateUser(user));
  }

  render(): ReactComponent {
    return (
      <div className="content container">
        <h2 className="box-title">
          <FormattedMessage {...messages.title} />
        </h2>

        <div className="box-content">
          <ProfileEditForm user={this.props.user} handleUpdate={this.handleUpdate} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProfileEditPage);
