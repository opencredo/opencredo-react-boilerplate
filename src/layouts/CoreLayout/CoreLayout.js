import 'styles/core.scss';
import React from 'react';
import CoreLayoutHeader from './CoreLayoutHeader';
import MainFooter from 'components/MainFooter/MainFooter';

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Statelesss Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of it's props, so we can
// define it with a plain javascript function...
function CoreLayout({children}) {
  const isAuthenticated = false;
  return (
    <div className="page-container">
      <CoreLayoutHeader isAuthenticated={isAuthenticated} />
      <div className="view-container">
        {children}
      </div>
      <MainFooter />
    </div>
  );
}

CoreLayout.propTypes = {
  children: React.PropTypes.element,
};

export default CoreLayout;
