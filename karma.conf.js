/* eslint global-require: 0 */
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const config = require('./config');

const PRODUCTION = false;
const DEVELOPMENT = false;
const __DEBUG__ = false;

const karmaWebpackConfig = Object.assign({}, webpackConfig, {
  devtool: 'inline-source-map',
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
    extensions: ['', '.json', '.js'],
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel-loader'],
        include: config.paths.app,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      // Any .scss file in ./src/... *except* those in ./src/styles/
      // are local css modules. the class names and ids will be changed to:
      // [name]-[local]-[hash:base64:5]
      {
        test: /\.scss$/,
        include: /src\/(?!styles).+/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
          'postcss',
          'sass',
        ],
      },
      // Any .scss files in ./src/styles are treated as normal (not local)
      // sass files, and so class names and ids will remain as specified
      {
        test: /\.scss$/,
        include: /src\/styles/,
        loader: 'style!css?sourceMap!postcss!sass',
      },
      // File loaders
      /* eslint-disable */
      { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
      { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
      { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' },
      /* eslint-enable */
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ DEVELOPMENT, PRODUCTION, __DEBUG__ }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
});

module.exports = (karmaConfig) => {
  karmaConfig.set({

    browsers: ['PhantomJS'],

    singleRun: !!process.env.CONTINUOUS_INTEGRATION,

    frameworks: ['mocha', 'sinon', 'chai'],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests.karma.js',
    ],

    preprocessors: {
      'tests.karma.js': ['webpack', 'sourcemap'],
    },

    reporters: ['mocha'],

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-sinon'),
      require('karma-chai'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
    ],

    webpack: karmaWebpackConfig,

    webpackServer: {
      noInfo: true,
      quiet: true,
    },

  });
};
