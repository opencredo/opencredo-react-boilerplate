import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MainHeader from 'containers/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';
import Spinner from 'components/Spinner/Spinner';
import 'styles/admin.scss';

const mapStateToProps = ({ spinner }) => ({ spinner });
const AdminPageLayout = (props) =>
  (
    <div id="admin-layout" className="page-container">
      <MainHeader />
      <div className="view-container">
        {props.children}
      </div>
      <MainFooter />
      <Spinner
        canShow={props.spinner.canShow}
        messageId={props.spinner.messageId}
      />
    </div>
  );

AdminPageLayout.propTypes = {
  spinner: PropTypes.object,
  children: PropTypes.element,
};

export default connect(mapStateToProps)(AdminPageLayout);
