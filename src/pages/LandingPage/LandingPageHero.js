import React, { PropTypes } from 'react';
import config from 'app-config';
import { Hero, HeroContent, HeroBackground } from 'components/Hero/index';
import { VAContainer, VAMiddle } from 'components/VAlign/VAlign';
import styles from './LandingPage.scss';

const LandingPageHero = (props) => {
  return (
    <Hero displayUnderNavbar>
      <HeroBackground image={props.backgroundImage} />
      <HeroContent>
        <VAContainer horizontal vertical>
          <VAMiddle>
            <div className="text-center">
              <h1 className={styles['hero-title']}>
                {config.name}
              </h1>

              <p className={styles['hero-description']}>
                {config.description}
              </p>
            </div>
          </VAMiddle>
        </VAContainer>
      </HeroContent>
    </Hero>
  );
};

LandingPageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default LandingPageHero;
