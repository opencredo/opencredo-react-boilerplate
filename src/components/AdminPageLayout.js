import React, { PropTypes } from 'react';

const AdminPageLayout = (props) => {
  return (
    <div id="admin-layout">
      {props.children}
    </div>
  );
};

AdminPageLayout.propTypes = {
  children: PropTypes.element,
};

export default AdminPageLayout;
