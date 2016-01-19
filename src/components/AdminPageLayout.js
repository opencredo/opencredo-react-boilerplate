import React, { PropTypes } from 'react';
import MainHeader from 'containers/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';

const AdminPageLayout = (props) => {
  return (
    <div id="admin-layout" className="page-container">
      <MainHeader />
      <div className="view-container">
        {props.children}
      </div>
      <MainFooter />
    </div>
  );
};

AdminPageLayout.propTypes = {
  children: PropTypes.element,
};

export default AdminPageLayout;
