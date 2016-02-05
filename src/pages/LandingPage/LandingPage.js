import React, { PropTypes } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { connect } from 'react-redux';
import styles from './LandingPage.scss';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import debug from 'debug';
import { autobind } from 'core-decorators';
import { messages } from './LandingPage.i18n';
import LandingPageHero from './LandingPageHero';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

if (__DEBUG__) {
  debug.enable('landing-page:*');
}

const log = debug('landing-page:info');

export class LandingPage extends React.Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  // executes only on the client
  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(messages.title));
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
        <LandingPageHero backgroundImage="/images/workspace-cc.jpg"/>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1 className={styles.title}>
                <FormattedMessage {...messages.title} />
              </h1>
              <p>
                <FormattedHTMLMessage {...messages.para.pressCtrlH} />
              </p>
              <p>
                <FormattedHTMLMessage {...messages.para.autoUpdate} />
              </p>
              <p>
                <FormattedHTMLMessage {...messages.para.es7Decorator} />
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={2}>
              <Button bsStyle="primary" onClick={this.handleButtonClick}>
                <FormattedMessage {...messages.button.clickMe} />
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) =>
  ({ isAuthenticated: state.isAuthenticated });

export default connect(mapStateToProps)(LandingPage);
