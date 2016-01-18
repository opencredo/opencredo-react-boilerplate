const path = require('path');
const merge = require('lodash/merge');

const NODE_ENV = process.env.NODE_ENV || 'development';
const APP_DIR = 'src';
const DIST_DIR = 'dist';
const SERVER_DIR = 'server';
const STATIC_DIR = 'static';
const STYLES_DIR = 'styles';
const PROJECT_ROOT = path.resolve(__dirname, '..');

const config = {
  env: NODE_ENV,

  paths: {
    root: PROJECT_ROOT,
    app: path.resolve(PROJECT_ROOT, APP_DIR),
    dist: path.resolve(PROJECT_ROOT, DIST_DIR),
    server: path.resolve(PROJECT_ROOT, SERVER_DIR),
    static: path.resolve(PROJECT_ROOT, APP_DIR, STATIC_DIR),
    styles: path.resolve(PROJECT_ROOT, APP_DIR, STYLES_DIR),
    entryFile: path.resolve(PROJECT_ROOT, APP_DIR, 'app.js'),
  },

  server: {
    hostname: 'localhost',
    port: process.env.PORT || 3000,
  },

  webpack: {
    vendor: [
      'lodash',
      'react',
      'react-redux',
      'react-router',
      'redux',
      'redux-simple-router',
      'react-bootstrap',
      'react-router-bootstrap',
    ],
    output: {
      publicPath: '/',
    },
  },

  compiler: {
    hash_type: 'hash',
    stats: {
      chunks: false,
      chunkModules: false,
      colors: true,
    },
  },
};


module.exports = merge({}, config, require(`./environments/${NODE_ENV}`));
