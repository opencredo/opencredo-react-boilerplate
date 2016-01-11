import React from 'react';
import styles from './LandingPage.scss';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import debug from 'debug';
import {autobind, deprecate} from 'core-decorators';

import MainFooter from 'components/MainFooter/MainFooter';
import {Hero, HeroContent, HeroBackground} from 'components/Hero/index';
import {VAContainer, VAMiddle} from 'components/VAlign/VAlign';

const log = debug('landing-page:info');
const error = debug('landing-page:error');

if (__DEBUG__) {
  debug.enable('landing-page:*');
}

export class LandingPage extends React.Component {

  static propTypes = {
    isAuthenticated: React.PropTypes.bool,
  };

  // executes only on the client
  componentDidMount() {
    if ('geolocation' in navigator) {
      log('Geolocation available');

      navigator.geolocation.getCurrentPosition(
        (success) => log('Gelolocation position:', success),
        (reason) => error('Geolocation error', reason)
      );
    }
  }

  @autobind
  handleButtonClick() {
    log(`button click handler context:`, this);
  }

  @deprecate(`
    It seems you're using an old click handler. Bla bla yadda yadda reason why we deprecated.
    This method will be completely removed in version 1.0`,
    {url: `https://github.com/mcalthrop/opencredo-react-boilerplate/wiki/blah`}
  )
  handleDeprecatedButtonClick() {
    log('deprecated button clicked');
  }

  render() {
    return (
      <div id="landing-page">
        <Hero displayUnderNavbar>
          <HeroBackground image="/images/workspace-cc.jpg" />
          <HeroContent>
            <VAContainer horizontal vertical>
              <VAMiddle>
                <div className="text-center">
                  <h1 className={styles['hero-title']}>
                    Opencredo React Boilerplate
                  </h1>

                  <p className={styles['hero-description']}>
                    A react + redux boilerplate.
                  </p>
                </div>
              </VAMiddle>
            </VAContainer>
          </HeroContent>
        </Hero>

        <Grid>
          <Row>
            <Col xs={12}>
              <h1 className={styles.title}>Landing Page zappy</h1>
              <p> Press <code>ctrl-h</code> to toggle Redux Dev Tools (development mode only)</p>
              <p>This pages auto-updates when you make changes and save.</p>
              <p>
                This page also demonstrates the use of ES7 decorators
                <code>@autobind</code> and <code>@deprecated</code>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={2}>
              <Button bsStyle="primary" onClick={this.handleButtonClick}>
                Click Me (log)
              </Button>
            </Col>
            <Col xs={6} md={2}>
              <Button bsStyle="default" onClick={this.handleDeprecatedButtonClick}>
                Deprecated
              </Button>
            </Col>
          </Row>
        </Grid>
        <MainFooter />
      </div>
    );
  }
}

export default LandingPage;
