const yargs = require('yargs');
const express = require('express');
const webpack = require('webpack');
const debug = require('debug');
const config = require('../config');
const history = require('connect-history-api-fallback');
const webpackconfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const browserSync = require('browser-sync');

debug.enable('app:*');

const app = express();
const compiler = webpack(webpackconfig);

const log = debug('app:server');

log('Redirecting all other requests to index.html');
app.use(history({ verbose: false }));

log('Enabling webpack dev middleware.');
app.use(webpackDevMiddleware(compiler, {
  lazy: false,
  noInfo: false,
  quiet: false,
  stats: config.compiler.stats,
}));

log('Enabling Webpack Hot Module Replacement (HMR).');
app.use(webpackHotMiddleware(compiler));

log(`Serving static content from ${config.paths.static}`);
app.use(express.static(config.paths.static));

const port = yargs.argv.port || config.server.port;
app.listen(4000, config.server.hostname);
browserSync.init({
  proxy: `${config.server.hostname}:4000`
});

module.exports = app;
