import 'styles/core.scss';
import LandingPageHeader from 'components/LandingPageHeader/LandingPageHeader';

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Statelesss Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of it's props, so we can
// define it with a plain javascript function...
function CoreLayout({isAuthenticated, children}) {
  return (
    <div className="page-container">
      <LandingPageHeader isAuthenticated={isAuthenticated} />
      <div className="view-container">
        {children}
      </div>
    </div>
  );
}

CoreLayout.propTypes = {
  children: React.PropTypes.element,
  isAuthenticated: React.PropTypes.bool,
};

export default CoreLayout;
