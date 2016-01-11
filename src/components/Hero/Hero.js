import React from 'react';
import styles from './Hero.scss';

export default class Hero extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.hero}>
        {this.props.children}
      </div>
    );
  }
}
