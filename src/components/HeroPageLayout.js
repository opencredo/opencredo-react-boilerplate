import React, { PropTypes } from 'react';
import MainHeader from 'containers/MainHeader/MainHeader';
import MainFooter from 'components/MainFooter/MainFooter';


const HeroPageLayout = (props) => {
  return (
    <div className="page-container">
      <MainHeader />
      <div className="view-container">
        {props.children}
      </div>
      <MainFooter />
    </div>
  );
};

HeroPageLayout.propTypes = {
  children: PropTypes.element,
};

export default HeroPageLayout;
