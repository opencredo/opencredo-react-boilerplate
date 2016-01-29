import React, { PropTypes } from 'react';

const Login = (props) =>
  <a onClick={props.onClick}>Login</a>;


Login.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Login;
