/* eslint key-spacing:0 spaced-comment:0 */
const _debug = require('debug');
const path = require('path');
const yargs = require('yargs');

const debug = _debug('app:config:base');

const argv = yargs.argv;

const config = {
  env : process.env.NODE_ENV,
  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base  : path.resolve(__dirname, '../../'),
  dir_client : 'src',
  dir_dist   : 'dist',
  dir_server : 'server',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host : 'localhost',
  server_port : process.env.PORT || 3000,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_css_modules     : true,
  compiler_enable_hmr      : false,
  compiler_globals         : {},
  compiler_source_maps     : true,
  compiler_hash_type       : 'hash',
  compiler_fail_on_warning : false,
  compiler_quiet           : false,
  compiler_public_path     : '',
  compiler_stats           : {
    chunks : false,
    chunkModules : false,
    colors : true,
  },
  compiler_vendor : [
    'react',
    'react-redux',
    'react-router',
    'redux',
    'redux-actions',
    'redux-thunk',
    'redux-simple-router',
    'react-bootstrap',
  ],

  // ----------------------------------
  // Test Configuration
  // ----------------------------------
  coverage_enabled   : !argv.watch,
  coverage_reporters : [
    {type : 'text-summary'},
    {type : 'html', dir : 'coverage'},
  ],
};


module.exports = config;
