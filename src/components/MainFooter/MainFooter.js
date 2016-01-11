import React from 'react';
import styles from './MainFooter.scss';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

const FOOTER_LINKS = [
  {to: '/about', content: 'About'},
  {to: '/faq', content: 'FAQ'},
  {to: '/policies', content: 'Policies'},
  {to: '/terms', content: 'Terms & Privacy'},
  {to: '/help', content: 'Help'},
];

export default class MainFooter extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <footer className={`container footer footer-main ${styles.footer}`}>
        <nav>
          <ul className="inline-list">
            {FOOTER_LINKS.map((link, index) =>
              <li key={index} className={`footer-item ${styles.item}`}>
                <Link to={link.to}>{link.content}</Link>
              </li>
            )}
          </ul>
          <div className={styles.social}>
            <Grid>
              <Row>
                <Col xs={6} className={styles.twitter}>
                  <a href="http://www.twitter.com/compartirespacios">Twitter</a>
                </Col>
                <Col xs={6} className={styles.facebook}>
                  <a href="http://www.twitter.com/compartirespacios">Facebook</a>
                </Col>
              </Row>
            </Grid>
          </div>
        </nav>
      </footer>
    );
  }
}
