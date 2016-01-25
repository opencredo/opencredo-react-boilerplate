import React, { PropTypes } from 'react';
import MainHeader from 'containers/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';
import IndeterminateSpinner from 'components/IndeterminateSpinner/IndeterminateSpinner';

const AdminPageLayout = (props) => {
  // TODO: both of the following values need to be set dynamically, according to some kind of action
  const canShow = true;
  const message = 'Updating...';

  return (
    <div id="admin-layout" className="page-container">
      <MainHeader />
      <div className="view-container">
        {props.children}
      </div>
      <MainFooter />
      <IndeterminateSpinner canShow={canShow} message={message}/>
    </div>
  );
};

AdminPageLayout.propTypes = {
  children: PropTypes.element,
};

export default AdminPageLayout;
