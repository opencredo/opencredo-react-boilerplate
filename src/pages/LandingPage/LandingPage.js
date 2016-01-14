import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import styles from './LandingPage.scss';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import debug from 'debug';
import {autobind} from 'core-decorators';

import LandingPageHero from './LandingPageHero';


if (__DEBUG__) {
  debug.enable('landing-page:*');
}

const log = debug('landing-page:info');
const error = debug('landing-page:error');

@connect((state) => ({isAuthenticated: state.auth.isAuthenticated}))
export class LandingPage extends React.Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func,
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

  componentWillUnmount() {
    log('remove root class .landing-page');
  }

  @autobind
  handleButtonClick() {
    log(`button click handler context:`, this);
  }

  render() {
    const {isAuthenticated} = this.props;

    return (
      <div id="landing-page">
        <LandingPageHero backgroundImage="/images/workspace-cc.jpg" />
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
          </Row>
          <Row>
            <Col xs={12}>
              {isAuthenticated ? 'authenticated' : 'not authenticated'}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
