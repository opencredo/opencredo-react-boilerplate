import React from 'react';
import styles from './Hero.scss';
import classNames from 'classnames';

export default class Hero extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    displayUnderNavbar: React.PropTypes.bool,
    small: React.PropTypes.bool,
  };

  render() {
    const classes = classNames({
      [styles.hero]: true,
      [styles['move-up']]: this.props.displayUnderNavbar,
      [styles['hero-small']]: this.props.small,
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
