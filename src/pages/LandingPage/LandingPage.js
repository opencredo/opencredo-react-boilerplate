import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './LandingPage.scss';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import debug from 'debug';
import { autobind } from 'core-decorators';
import LandingPageHero from './LandingPageHero';
import {
  updateDocumentTitle,
  resetDocumentTitle,
  FormattedMessageType,
} from 'redux/modules/document-title/document-title';

if (__DEBUG__) {
  debug.enable('landing-page:*');
}

const log = debug('landing-page:info');
const PAGE_TITLE: FormattedMessageType = {
  description: 'i18n token for the landing page title',
  id: 'titles_landing_page',
  defaultMessage: 'Landing Page',
};

export class LandingPage extends React.Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  // executes only on the client
  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(PAGE_TITLE));
  }

  componentWillUnmount() {
    log('remove custom document title');
    this.props.dispatch(resetDocumentTitle());
  }

  @autobind
  handleButtonClick() {
    log(`button click handler context:`, this);
  }

  render() {
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
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(LandingPage);
