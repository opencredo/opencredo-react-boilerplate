import React, { PropTypes } from 'react';

const HeroPageLayout = (props) => {
  return (
    <div id="page-layout" className="with-hero">
      {props.children}
    </div>
  );
};

HeroPageLayout.propTypes = {
  children: PropTypes.element,
};

export default HeroPageLayout;
