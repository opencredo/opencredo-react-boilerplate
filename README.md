# opencredo-react-boilerplate

[![Build Status](https://travis-ci.org/opencredo/opencredo-react-boilerplate.svg?branch=master)](https://travis-ci.org/opencredo/opencredo-react-boilerplate)
[![Dependency Status](https://david-dm.org/opencredo/opencredo-react-boilerplate.svg)](https://david-dm.org/opencredo/opencredo-react-boilerplate)

React and Redux boilerplate codebase.

## Usage

Clone repo, then run:

``` sh
npm install # one-time execution
npm start
```

Then open browser at [`http://localhost:3000/`](http://localhost:3000/).

## Directory Structure
```
.
├── config                      # Config: mostly used by build & webpack
│   ├── environments/           # Config overrides for different NODE_ENVs
│   └── index.js                # Config entry point. Modify to suit your needs.
├── dist/                       # Built artifacts get put here (e.g. webpack.output)
├── server/                     # Express server files go here
│   ├── index.js                # Launches the express() server with webpack-hmr
├── src                         # The source code of the application
│   ├── components/             # React [functional|dumb|stateless] components
│   ├── containers/             # React "container" components (connected to store)
│   ├── declarations/           # Flowtype declarations would go here, if necessary
│   ├── pages/                  # Pages: React Components that live in routes
│   ├── redux/                  # Here we configure our redux stores, actions, reducers...
│   │   ├── modules/            # Redux modules would be collections of reducers + actions
│   │   ├── configure-store.js  # Redux store configured here (middleware, initial state, reducers...)
│   │   └── root-reducer.js     # Here we combine all our reducers
│   ├── shared/                 # Shared resources
│   ├── static/                 # Static assetes. Some call this `public/`
│   ├── styles/                 # Global CSS styles (class names left intact)
│   ├── app-config.js           # Global application settings
│   ├── app.js                  # Application entry point
│   ├── index.html              # index.html template
│   ├── routes.js               # All our routes
│   └── translations/           # Our i18n translations go here
├── karma.conf.js               # (self explanatory)
├── package.json                # (self explanatory)
├── tests.karma.js              # (self explanatory)
└── webpack.config.js           # (self explanatory)
```

## Flowtype

See [FLOWTYPE.md](./FLOWTYPE.md) for [flowtype](http://flowtype.org/) usage.

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for how to get involved.
