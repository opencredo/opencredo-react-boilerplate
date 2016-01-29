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
npm start
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

## Modules
| Dependencies                                                                     | Description                                                            |
|----------------------------------------------------------------------------------|------------------------------------------------------------------------| 
| [axios](https://www.npmjs.com/package/axios)                                     | Promise based HTTP client for the browser and node.js.                 |
| [classnames](https://www.npmjs.com/package/classnames)                           | Simple utility for conditionally joining classNames together.          |
| [empty](https://www.npmjs.com/package/empty)                                     | Utility that provides different types of empty objects.                |  
| [lodash](https://www.npmjs.com/package/lodash)                                   | Lodash modular utilities.                                              |
| [react](https://www.npmjs.com/package/react)                                     | React is a JavaScript library for building user interfaces.            |
| [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)                 | Bootstrap 3 components built with React                                |
| [react-dom](https://www.npmjs.com/package/react-dom)                             | React package for working with the DOM.                                |
| [react-intl](https://www.npmjs.com/package/react-intl)                           | React Components for internationalization.                             |  
| [react-redux](https://www.npmjs.com/package/react-redux)                         | Official React bindings for Redux                                      |  
| [react-router](https://www.npmjs.com/package/react-router)                       | A complete routing library for React.js                                | 
| [react-router-bootstrap](https://www.npmjs.com/package/react-router-bootstrap)   | Integration between React Router and React-Bootstrap                   |
| [react-router-redux](https://www.npmjs.com/package/react-router-redux)           | Ruthlessly simple bindings to keep react-router and redux in sync      |
| [redux](https://www.npmjs.com/package/redux)                                     | Predictable state container for JavaScript apps                        |
| [redux-logger](https://www.npmjs.com/package/redux-logger)                       | Logger for redux                                                       |
| [redux-thunk](https://www.npmjs.com/package/redux-thunk)                         | Thunk middleware for Redux.                                            |  
| [url](https://www.npmjs.com/package/url)                                         | The core <code>url</code> packaged standalone for use with Browserify. | 

| DevDependencies                                                                                                    | Description                                                                                                                                                                                                                       |
|--------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [babel-core](https://www.npmjs.com/package/babel-core)                                                             | Babel compiler core.                                                                                                                                                                                                              |
| [babel-eslint](https://www.npmjs.com/package/babel-eslint)                                                         | Allows you to lint ALL valid Babel code with the fantastic ESLint.                                                                                                                                                                |
| [babel-loader](https://www.npmjs.com/package/babel-loader)                                                         | Babel module loader for webpack                                                                                                                                                                                                   |
| [babel-plugin-add-module-exports](https://www.npmjs.com/package/babel-plugin-add-module-exports)                   | Restore Babel 5 behavior for module exports [babel#2212](https://phabricator.babeljs.io/T2212)                                                                                                                                    |
| [babel-plugin-react-transform](https://www.npmjs.com/package/babel-plugin-react-transform)                         | Babel plugin to instrument React components with custom transforms                                                                                                                                                                |
| [babel-plugin-transform-decorators-legacy](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy) | A plugin for Babel 6 that (mostly) replicates the old decorator behavior from Babel 5.                                                                                                                                            | 
| [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime)                     | Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals                                                                                                                     |
| [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015)                                           | Babel preset for all es2015 plugins.                                                                                                                                                                                              |
| [babel-preset-react](https://www.npmjs.com/package/babel-preset-react)                                             | Babel preset for all React plugins.                                                                                                                                                                                               |
| [babel-preset-react-hmre](https://www.npmjs.com/package/babel-preset-react-hmre)                                   | Babel preset for React HMR and Error Catching                                                                                                                                                                                     |
| [babel-preset-stage-0](https://www.npmjs.com/package/babel-preset-stage-0)                                         | Babel preset for stage 0 plugins                                                                                                                                                                                                  |
| [babel-register](https://www.npmjs.com/package/babel-register)                                                     | Babel require hook                                                                                                                                                                                                                |
| [babel-runtime](https://www.npmjs.com/package/babel-runtime)                                                       | Babel selfContained runtime                                                                                                                                                                                                       |
| [chai](https://www.npmjs.com/package/chai)                                                                         | BDD/TDD assertion library for node.js and the browser. Test framework agnostic.                                                                                                                                                   |
| [connect-history-api-fallback](https://www.npmjs.com/package/connect-history-api-fallback)                         | Provides a fallback for non-existing directories so that the HTML 5 history API can be used.                                                                                                                                      |
| [core-decorators](https://www.npmjs.com/package/core-decorators)                                                   | Library of ES2016 (ES7) JavaScript decorators inspired by languages that come with built-ins like @​override, @​deprecate, @​autobind, @​mixin and more!                                                                              |
| [css-loader](https://www.npmjs.com/package/css-loader)                                                             | CSS loader module for webpack                                                                                                                                                                                                     |
| [cssnano](https://www.npmjs.com/package/cssnano)                                                                   | A modular minifier utilizing small modules from the PostCSS ecosystem and written on top of PostCSS. Able to perform advanced optimisations such as custom identifier reduction, z-index rebasing, and adjacent selector merging. |
| [eslint](https://www.npmjs.com/package/eslint)                                                                     | An AST-based pattern checker for JavaScript.                                                                                                                                                                                      |
| [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)                                         | Airbnb's ESLint config, following our styleguide.                                                                                                                                                                                 |
| [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)                                     | JavaScript Standard Style - ESLint Shareable Config                                                                                                                                                                               |
| [eslint-config-standard-react](https://www.npmjs.com/package/eslint-config-standard-react)                         | JavaScript Standard Style React/JSX support - ESLint Shareable Config                                                                                                                                                             |
| [eslint-loader](https://www.npmjs.com/package/eslint-loader)                                                       | Eslint loader for Webpack                                                                                                                                                                                                         |
| [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel)                                           | An eslint rule plugin companion to babel-eslint                                                                                                                                                                                   |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)                                           | React specific linting rules for ESLint                                                                                                                                                                                           |
| [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)                                     | ESlint Plugin for the Standard Linter                                                                                                                                                                                             |
| [eventsource-polyfill](https://www.npmjs.com/package/eventsource-polyfill)                                         | Provide polyfill to support EventSource in browser where it is not available.                                                                                                                                                     |
| [express](https://www.npmjs.com/package/express)                                                                   | Fast, unopinionated, minimalist web framework.                                                                                                                                                                                    |
| [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)                           | Extract text from bundle into a file. Commonly used to generate separate .css file.                                                                                                                                               |
| [file-loader](https://www.npmjs.com/package/file-loader)                                                           | File loader module for webpack.                                                                                                                                                                                                   |
| [flow-bin](https://www.npmjs.com/package/flow-bin)                                                                 | Binary wrapper for Flow - A static type checker for JavaScript.                                                                                                                                                                   |
| [fs-extra](https://www.npmjs.com/package/fs-extra)                                                                 | Fs-extra contains methods that aren't included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.                                                                                                            |
| [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)                                           | Simplifies creation of HTML files to serve your webpack bundles.                                                                                                                                                                  |
| [isparta-loader](https://www.npmjs.com/package/isparta-loader)                                                     | Loader for webpack that instrument Babel code with isparta , enabling code coverage reporting.                                                                                                                                    |
| [json-loader](https://www.npmjs.com/package/json-loader)                                                           | json loader module for webpack that extracts json content as json parsed object                                                                                                                                                   |
| [karma](https://www.npmjs.com/package/karma)                                                                       | Testing Runner for JavaScript that allows you to execute JavaScript code in multiple real browsers.                                                                                                                               |
| [karma-chai](https://www.npmjs.com/package/karma-chai)                                                             | Chai for Karma.                                                                                                                                                                                                                   |
| [karma-mocha](https://www.npmjs.com/package/karma-mocha)                                                           | A Karma plugin. Adapter for Mocha testing framework.                                                                                                                                                                              |
| [karma-mocha-reporter](https://www.npmjs.com/package/karma-mocha-reporter)                                         | Karma reporter with mocha style logging.                                                                                                                                                                                          |
| [karma-phantomjs-launcher](https://www.npmjs.com/package/karma-phantomjs-launcher)                                 | A Karma plugin. Launcher for PhantomJS.                                                                                                                                                                                           |
| [karma-sinon](https://www.npmjs.com/package/karma-sinon)                                                           | Sinon for Karma.                                                                                                                                                                                                                  |
| [karma-sourcemap-loader](https://www.npmjs.com/package/karma-sourcemap-loader)                                     | Karma plugin that locates and loads existing javascript source map files.                                                                                                                                                         |
| [karma-webpack](https://www.npmjs.com/package/karma-webpack)                                                       | Use webpack with karma.                                                                                                                                                                                                           |
| [mocha](https://www.npmjs.com/package/mocha)                                                                       | Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser.                                                                                                                                           |
| [node-sass](https://www.npmjs.com/package/node-sass)                                                               | Node-sass is a library that provides binding for Node.js to libsass, the C version of the popular stylesheet preprocessor, Sass.                                                                                                  |
| [phantomjs](https://www.npmjs.com/package/phantomjs)                                                               | An NPM installer for PhantomJS, headless webkit with JS API.                                                                                                                                                                      |
| [phantomjs-polyfill](https://www.npmjs.com/package/phantomjs-polyfill)                                             | Polyfill for Function.prototype.bind which is missing from PhantomJS.                                                                                                                                                             |
| [postcss-loader](https://www.npmjs.com/package/postcss-loader)                                                     | PostCSS loader for webpack to postprocesses your CSS with PostCSS plugins.                                                                                                                                                        |
| [react-addons-test-utils](https://www.npmjs.com/package/react-addons-test-utils)                                   | This package provides the React TestUtils add-on.                                                                                                                                                                                 |
| [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr)                                           | A React Transform that enables hot reloading React classes using Hot Module Replacement API.                                                                                                                                      |
| [redux-devtools](https://www.npmjs.com/package/redux-devtools)                                                     | Redux DevTools with hot reloading and time travel.                                                                                                                                                                                |
| [redux-devtools-dock-monitor](https://www.npmjs.com/package/redux-devtools-dock-monitor)                           | A resizable and movable dock for Redux DevTools monitors.                                                                                                                                                                         |
| [redux-devtools-log-monitor](https://www.npmjs.com/package/redux-devtools-log-monitor)                             | The default tree view monitor for Redux DevTools.                                                                                                                                                                                 |
| [sass-loader](https://www.npmjs.com/package/sass-loader)                                                           | Sass loader for webpack.                                                                                                                                                                                                          |
| [sinon](https://www.npmjs.com/package/sinon)                                                                       | Standalone and test framework agnostic JavaScript test spies, stubs and mocks.                                                                                                                                                    |
| [style-loader](https://www.npmjs.com/package/style-loader)                                                         | Style loader module for webpack.                                                                                                                                                                                                  |
| [url-loader](https://www.npmjs.com/package/url-loader)                                                             | URL loader module for webpack                                                                                                                                                                                                     |
| [webpack](https://www.npmjs.com/package/webpack)                                                                   | Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.   |
| [webpack-dev-middleware](https://www.npmjs.com/package/webpack-dev-middleware)                                     | Offers a dev middleware for webpack, which arguments a live bundle to a directory                                                                                                                                                 |
| [webpack-hot-middleware](https://www.npmjs.com/package/webpack-hot-middleware)                                     | Webpack hot reloading using only webpack-dev-middleware. This allows you to add hot reloading into an existing server without webpack-dev-server.                                                                                 |
