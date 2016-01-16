const path = require('path');
const express = require('express');
const webpack = require('webpack');
const _debug = require('debug');
_debug.enable('app:*');

const debug = _debug('app:server');
const webpackConfig = require('../webpack.config');
const app = express();
const compiler = webpack(webpackConfig);
debug('Enabling webpack dev middleware.');
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

debug('Enabling Webpack Hot Module Replacement (HMR).');
app.use(require('webpack-hot-middleware')(compiler));

debug('Serving static content from ./src/static');
app.use(express.static(path.resolve(__dirname, '..', 'src', 'static')));

debug('Redirecting all other requests to index.html');
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'src', 'index.html'));
});

module.exports = app;
