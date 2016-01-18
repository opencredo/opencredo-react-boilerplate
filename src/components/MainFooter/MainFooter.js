import React from 'react';
import styles from './MainFooter.scss';
import { Link } from 'react-router';

const FOOTER_LINKS = [
  { to: '/about', content: 'About' },
  { to: '/faq', content: 'FAQ' },
  { to: '/policies', content: 'Policies' },
  { to: '/terms', content: 'Terms & Privacy' },
  { to: '/help', content: 'Help' },
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
