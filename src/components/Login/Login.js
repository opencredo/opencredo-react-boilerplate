import React, { PropTypes } from 'react';

const Login = (props) =>
  <a onClick={ props.onClick }>Login</a>;

Login.displayName = 'Login';
Login.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Login;
