import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {HeroBackground, Hero} from 'components/Hero';

export default () => (
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
