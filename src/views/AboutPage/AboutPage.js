import {Grid, Row, Col} from 'react-bootstrap';

export default () =>
  <Grid>
    <Row>
      <Col xs={12} md={8}>
        <h1>About Page</h1>
        <p>
          Currently implemented as a stateless component,
          so will not auto-update when chages are made.
        </p>
      </Col>
    </Row>
  </Grid>;
