import React from 'react';
import styles from './MainFooter.scss';
import { Link } from 'react-router';

const FOOTER_LINKS = [
  { to: '/pages/about-us', content: 'About' },
  { to: '/pages/faq', content: 'FAQ' },
  { to: '/pages/policies', content: 'Policies' },
  { to: '/pages/terms', content: 'Terms & Privacy' },
  { to: '/pages/help', content: 'Help' },
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
        </nav>
      </footer>
    );
  }
}
