import React from 'react';
import styles from './MainFooter.scss';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { links } from 'shared/links';

const footerLinks = [
  links.aboutUs,
  links.faq,
  links.policies,
  links.terms,
  links.help,
];
export default class MainFooter extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <footer className={`footer footer-main ${styles.footer}`}>
        <nav>
          <ul className="inline-list">
            {footerLinks.map((link) =>
              <li key={link.id} className={`footer-item ${styles.item}`}>
                <Link to={link.to}>
                  <FormattedMessage {...link} />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </footer>
    );
  }
}
