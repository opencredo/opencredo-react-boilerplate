import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MainHeader from 'containers/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';
import IndeterminateSpinner from 'components/IndeterminateSpinner/IndeterminateSpinner';

const mapStateToProps = ({ spinner }) => ({ spinner });
const AdminPageLayout = (props) => {
  return (
    <div id="admin-layout" className="page-container">
      <MainHeader />
      <div className="view-container">
        {props.children}
      </div>
      <MainFooter />
      <IndeterminateSpinner
        canShow={props.spinner.canShow}
        message={props.spinner.message}
      />
    </div>
  );
};

AdminPageLayout.propTypes = {
  spinner: PropTypes.object,
  children: PropTypes.element,
};

export default connect(mapStateToProps)(AdminPageLayout);
