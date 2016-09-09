import React from 'react';
import styles from './Hero.scss';

export default class HeroBackground extends React.Component {
  static displayName = 'HeroBackground';
  static propTypes = {
    image: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={ styles.background } style={ { backgroundImage: `url(${ this.props.image })` } } />
    );
  }
}
