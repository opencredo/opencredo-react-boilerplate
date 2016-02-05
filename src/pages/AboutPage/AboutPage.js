/* @flow */
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { HeroBackground, Hero } from 'components/Hero';
import { messages } from './AboutPage.i18n';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

class AboutPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(messages.title));
  }

  componentWillUnmount() {
    this.props.dispatch(resetDocumentTitle());
  }

  render() {
    return (
      <section id="about-page">
        <Hero displayUnderNavbar>
          <HeroBackground image="/images/workspace-cb.jpg"/>
        </Hero>
        <Grid>
          <Row>
            <Col xs={12} className="text-center">
              <h1>
                <FormattedMessage {...messages.title} />
              </h1>
              <p>
                <FormattedMessage {...messages.overview} />
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default connect(() => ({}))(AboutPage);
