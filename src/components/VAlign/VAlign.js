/* eslint react/no-multi-comp: 0 */
import React from 'react';
import classNames from 'classnames';
import styles from './VAlign.scss';

export const VAMiddle = ({ children = '' }) => <div className={ styles.middle }>{children}</div>;
export const VATop = ({ children = '' }) => <div className={ styles.top }>{children}</div>;
export const VABottom = ({ children = '' }) => <div className={ styles.bottom }>{children}</div>;

export const VAContainer = ({ horizontal, vertical, children = '' }) => {
  const classes = classNames({
    [styles.container]: true,
    [styles.vertical]: vertical,
    [styles.horizontal]: horizontal,
  });

  return <div className={ classes }>{children}</div>;
};

VAContainer.displayName = 'VAContainer';
VAContainer.propTypes = {
  children: React.PropTypes.node,
  horizontal: React.PropTypes.bool,
  vertical: React.PropTypes.bool,
};

VAMiddle.displayName = 'VAMiddle';
VAMiddle.propTypes = {
  children: React.PropTypes.node,
};

VATop.displayName = 'VATop';
VATop.propTypes = {
  children: React.PropTypes.node,
};

VABottom.displayName = 'VABottom';
VABottom.propTypes = {
  children: React.PropTypes.node,
};
