import React, { PropTypes } from 'react';
import 'styles/app.scss';

const AppLayout = (props) => {
  return (
    <div id="app-layout" className="wrapper">
      {props.children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element,
};

export default AppLayout;
