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
      </div>
    );
  }
}
