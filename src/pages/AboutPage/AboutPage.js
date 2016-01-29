/* @flow */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { HeroBackground, Hero } from 'components/Hero';
import { FormattedMessageType } from 'declarations/i18n-types';
import {
  updateDocumentTitle,
  resetDocumentTitle,
} from 'redux/modules/document-title/document-title';

const PAGE_TITLE: FormattedMessageType = {
  id: 'aboutPage.title',
  defaultMessage: 'About Us',
};

class AboutPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(updateDocumentTitle(PAGE_TITLE));
  }

  componentWillUnmount() {
    this.props.dispatch(resetDocumentTitle());
  }

  render() {
    return (
      <section id="about-page">
      <Hero displayUnderNavbar>
        <HeroBackground image="/images/workspace-cb.jpg" />
        </Hero>
        <Grid>
          <Row>
            <Col xs={12} className="text-center">
              <h1>About Page</h1>
              <p>
                Currently implemented as a stateless component,
                so will not auto-update when chages are made.
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}


export default connect(() => ({}))(AboutPage);
