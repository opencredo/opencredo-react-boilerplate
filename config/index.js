'use strict';
const _debug = require('debug');
const base = require('./environments/base');
const debug = _debug('app:config');

debug('Create configuration.');
debug(`Apply environment overrides for NODE_ENV "${base.env}".`);
let overrides;

try {
  overrides = require(`./environments/${base.env}`)(base);
} catch (e) {
  debug(
    `No configuration overrides found for NODE_ENV "${base.env}"`
  );
}

module.exports = Object.assign({}, base, overrides, {
  APP_NAME: 'Opencredo React Boilerplate',
});
