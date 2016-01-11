require('babel-register');

const yargs = require('yargs');
const config = require('../config');
const server = require('../server/main');
const debug = require('debug')('app:bin:server');
const port = yargs.argv.port || config.server_port;

server.listen(port);
debug(`Server is now running at localhost: ${port}.`);
