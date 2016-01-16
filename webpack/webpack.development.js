'use strict';
const path = require('path');
const webpack = require('webpack');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const __DEV__ = NODE_ENV === 'development';
const PROJECT_ROOT = path.resolve(__dirname, '..');
const SOURCES_ROOT = path.resolve(__dirname, '..', 'src');
const DIST_PATH = path.resolve(PROJECT_ROOT, 'dist');
const GLOBALS = {
  NODE_ENV,
  __DEV__      : NODE_ENV === 'development',
  __PROD__     : NODE_ENV === 'production',
  __DEBUG__    : NODE_ENV === 'development'
};

let webpackConfig = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client',
      `${SOURCES_ROOT}/main.js`
    ],
    vendor: [
      'react',
      'react-redux',
      'react-router',
      'redux',
      'redux-actions',
      'redux-thunk',
      'redux-simple-router',
      'react-bootstrap',
    ]
  },
  resolve: {
    root: [SOURCES_ROOT],
    extensions: ['.js', '.jsx', '']
  },
  output: {
    filename: `[name].[hash].js`,
    path: DIST_PATH,
    publicPath: ''
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(SOURCES_ROOT, 'index.html'),
      hash: false,
      favicon: path.resolve(SOURCES_ROOT, 'static', 'favicon.png'),
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel-loader'],
      include: path.resolve(SOURCES_ROOT)
    }, {
      test: /\.scss$/,
      include: /src/,
      loaders: [
        'style',
        ,
        'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss',
        'sass'
      ]
    },
    {
      test: /\.scss$/,
      exclude: /src/,
      loaders: [
        'style',
        'css?sourceMap',
        'postcss',
        'sass'
      ]
    },
    // File loaders
    { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
    { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
    { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
    { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
    { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
    { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' }],
    // include src/styles in SASS paths
  },
  sassLoader: {
    includePaths: path.resolve(SOURCES_ROOT, 'styles')
  },
  // postcss plgin
  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      safe: true,
      discardComments: {
        removeAll: true
      }
    })
  ]
};

module.exports = webpackConfig;
