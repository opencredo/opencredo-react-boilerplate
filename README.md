# opencredo-react-boilerplate

[![Build Status](https://travis-ci.org/opencredo/opencredo-react-boilerplate.svg?branch=master)](https://travis-ci.org/opencredo/opencredo-react-boilerplate)
[![Dependency Status](https://david-dm.org/opencredo/opencredo-react-boilerplate.svg)](https://david-dm.org/opencredo/opencredo-react-boilerplate)
[![devDependency Status](https://david-dm.org/opencredo/opencredo-react-boilerplate/dev-status.svg)](https://david-dm.org/opencredo/opencredo-react-boilerplate#info=devDependencies)

React and Redux boilerplate codebase.

## Features

* [`react`](https://facebook.github.io/react/)
* [`redux`](http://rackt.org/redux/)
* [`react-router`](https://github.com/rackt/react-router)
* [`react-router-redux`](https://github.com/rackt/react-router-redux) &ndash; synchronises react router state with your redux store
* [`webpack`](https://webpack.github.io)
  - Configured with [`webpack-dev-middleware`](https://github.com/webpack/webpack-dev-middleware) and [`webpack-hot-middleware`](https://github.com/glenjamin/webpack-hot-middleware)
  - Hot Module Replacement with [`react-transform-hmr`](https://github.com/gaearon/react-transform-hmr) and [`babel-preset-react-hmre`](https://github.com/danmartinez101/babel-preset-react-hmre)
  - SASS / SCSS
  - [CSS modules](https://github.com/css-modules/css-modules)
  - `.eslintrc` pre-loader
  - Support for production and development builds based on `NODE_ENV`
* [`react-addons-test-utils`](https://facebook.github.io/react/docs/test-utils.html) for unit testing
* [Flowtype](http://flowtype.org) Static type checker (see [FLOWTYPE.md](./FLOWTYPE.md) for more info)
* [Babel](https://babeljs.io) for ES2015 and _beyond_
  - Presets: `es2015`, `react`, `stage-0`, and `react-hmre` (development)
* [`react-bootstrap`](https://react-bootstrap.github.io) and [`react-router-bootstrap`](https://github.com/react-bootstrap/react-router-bootstrap)
* [`react-intl`](https://github.com/yahoo/react-intl/) for i18n support with several example translations; using v2 beta: keep an eye on the [RFC](https://github.com/yahoo/react-intl/issues/162)
* [`redux-form`](https://github.com/erikras/redux-form) and [`redux-form-validation`](https://github.com/CosticaPuntaru/redux-form-validation) for form integration and validation
* Example production build script (`npm run build`)
* Basic support for restricted pages. Check `src/routes.js` for examples of restricted routes

## Usage

### First time

Clone this repo, then run `npm install`.

Windows users need to follow the instructions in [FLOWTYPE.md](./FLOWTYPE.md#windows-installation) to install the `flow` binaries.

### Development

When you're developing, start webpack as follows:

``` sh
npm run start       # standard development
npm run start:bs    # as above, but with browser-sync
```

Then open a browser at [`http://localhost:3000/`](http://localhost:3000/).

Some useful commands:

``` sh
npm run lint    # execute the eslint process on the codebase
npm run karma   # execute just the unit tests
npm run test    # execute flow checks, eslint and unit tests
npm run build   # run this just before you commit - the Travis-CI job runs this command
```

### Production

To test a production build:

``` sh
npm run build && (cd dist && python -m SimpleHTTPServer)
```

Then open a browser at [`http://localhost:8000/`](http://localhost:8000/).

## Directory Structure
```
.
├── config                      # Config: mostly used by build & webpack
│   ├── environments/           # Config overrides for different NODE_ENVs
│   └── index.js                # Config entry point. Modify to suit your needs
├── dist/                       # Built artifacts get put here (e.g. webpack.output)
├── server/                     # Express server files go here
│   ├── index.js                # Launches the express() server with webpack-hmr
├── src                         # The source code of the application
│   ├── api/                    # Modules that make API service calls
│   ├── components/             # React [functional|dumb|stateless] components
│   ├── containers/             # React "container" components (connected to store)
│   ├── declarations/           # Flowtype declarations would go here, if necessary
│   ├── pages/                  # Pages: React Components that live in routes
│   ├── redux/                  # Here we configure our redux stores, actions, reducers...
│   │   ├── modules/            # Redux modules would be collections of reducers + actions
│   │   ├── configure-store.js  # Redux store configured here (middleware, initial state, reducers...)
│   │   └── root-reducer.js     # Here we combine all our reducers
│   ├── shared/                 # Shared resources
│   ├── static/                 # Static assets. Some call this `public/`
│   ├── styles/                 # Global CSS styles (class names left intact)
│   ├── translations/           # Our i18n translations go here
│   ├── app.js                  # Application entry point
│   ├── app-config.js           # Global application settings
│   ├── index.html              # index.html template
│   └── routes.js               # All our routes
├── karma.conf.js               # (self explanatory)
├── package.json                # (self explanatory)
├── tests.karma.js              # (self explanatory)
└── webpack.config.js           # (self explanatory)
```

Note: see [Dan Abramov's explanation about "Smart and Dumb Components"](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for how to get involved.
