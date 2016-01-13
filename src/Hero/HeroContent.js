import React from 'react';
import styles from './Hero.scss';

export default class HeroContent extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const children = this.props.children;
    return (
      <div className={styles.content}>
        {children ? children : ''}
        <footer className={styles.footer}>
          <div style={{margin: 'auto', backgroundColor: 'white', width: 500}}>
            Search box
          </div>
        </footer>
      </div>
    );
  }
}
