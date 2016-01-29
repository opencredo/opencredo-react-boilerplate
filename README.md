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
## Features

* [React](https://facebook.github.io/react/)
  - `react-dom`, `react-addons-test-utils`.
* [Redux](http://rackt.org/redux/)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
  - Synchronize react router state with your redux store.
* [Webpack](https://webpack.github.io)
  - Configured with `webpack-dev-middleware` and `webpack-hot-middlware`.
  - Hot Module Replacement
  - SASS / SCSS
  - [CSS modules](https://github.com/css-modules/css-modules)
  - `.eslintrc` pre-loader
  - Support for production and development builds based on `NODE_ENV`.
* [Hot Module Replacement](https://github.com/gaearon/react-transform-hmr) in the form of `react-transform-hmr`, and `babel-preset-react-hmre`.
* [Flowtype](http://flowtype.org) Static type checker.
* [Babel](https://babeljs.io) for ES2015 and _beyond_.
  - Presets: `es2015`, `react`, `stage-0`, and `react-hmre` (development).
* [React Bootstrap](https://react-bootstrap.github.io) and [react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)
* [react-intl](https://github.com/yahoo/react-intl/) for i18n support with several example translations; using v2 beta: keep an eye on the [RFC](https://github.com/yahoo/react-intl/issues/162)
* [redux-form](https://github.com/erikras/redux-form) and [redux-form-validation](https://github.com/CosticaPuntaru/redux-form-validation) for form integration and validation
* Example production build script (`npm run build`).
* Basic support for restricted pages. Check `src/routes.js` for examples of restricted routes.

## Flowtype

See [FLOWTYPE.md](./FLOWTYPE.md) for [flowtype](http://flowtype.org/) usage.

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for how to get involved.
