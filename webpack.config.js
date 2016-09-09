/* eslint operator-linebreak: 0 */
/* eslint comma-dangle: 0 */
const head = require('lodash/head');
const tail = require('lodash/tail');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssnano = require('cssnano');
const debug = require('debug');
const config = require('./config');

debug.enable('app:*');

const log = debug('app:webpack');

// Environment
const NODE_ENV = process.env.NODE_ENV || 'development';
const DEVELOPMENT = NODE_ENV === 'development';
const TESTING = NODE_ENV === 'test';
const PRODUCTION = NODE_ENV === 'production';
const __DEBUG__ = DEVELOPMENT;
log(`Starting in ${ NODE_ENV } mode.`);

// Webpack scss handling setup
const loaderOrLoaders = DEVELOPMENT ? 'loader' : 'loaders';
log(`SCSS webpack ${ loaderOrLoaders } enabled.`);
/* Any .scss file in ./src/... *except* those in ./src/styles/
 * are local css modules. the class names and ids will be changed to:
 * [name]-[local]-[hash:base64:5] */
const devLoaders = {
  test: /\.scss$/,
  include: /src\/(?!styles).+/,
  loaders: [
    'style',
    'css?modules&sourceMap&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
    'postcss',
    'sass',
  ]
};
const prodLoader = {
  test: /\.scss$/,
  include: /src\/(?!styles).+/,
  loader: ExtractTextPlugin.extract(
    { fallbackLoader: 'style-loader',
      loader: 'css-loader?' +
      'modules&sourceMap&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]&sourceMap?' +
      'postcss?' +
      'sass?' +
      'sourceMap?',
    }
  )
};
const scssLoader = DEVELOPMENT ? devLoaders : prodLoader;

// Webpack configuration
log('Creating webpack configuration...');
const webpackconfig = {
  devtool: config.webpack.devtool,
  resolve: {
    root: config.paths.app,
    extensions: ['', '.js', '.jsx'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },

  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules'),
  },

  entry: {
    app: [config.paths.entryFile],
    vendor: config.webpack.vendor,
  },

  output: {
    filename: `[name].[${ config.compiler.hash_type }].js`,
    path: config.paths.dist,
    publicPath: config.webpack.output.publicPath,
  },

  plugins: [
    new webpack.DefinePlugin({ DEVELOPMENT, PRODUCTION, __DEBUG__ }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(config.paths.app, 'index.html'),
      hash: true,
      favicon: path.resolve(config.paths.static, 'favicon.png'),
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],

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
      scssLoader,
      /* Any .scss files in ./src/styles are treated as normal (not local)
       * sass files, and so class names and ids will remain as specified */
      {
        test: /\.scss$/,
        include: /src\/styles/,
        loader: 'style!css!postcss!sass',
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

  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions'],
      },
      safe: true,
      discardComments: {
        removeAll: true,
      },
    }),
  ],

  sassLoader: {
    includePaths: config.paths.styles,
  },

  eslint: {
    configFile: path.resolve(config.paths.root, '.eslintrc'),
  },
};

if (!TESTING) {
  webpackconfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor'],
  }));
}

if (DEVELOPMENT) {
  log('Extending webpack configuration with development settings.');

  log('Adding HMR entry points.');
  webpackconfig.entry.app.unshift(
    'webpack-hot-middleware/client',
    'react-hot-loader/patch'
  );

  log('Enable development plugins (HMR, NoErrors).');
  webpackconfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

if (PRODUCTION) {
  log('Extending webpack configuration with production settings.');

  log('Add uglify and dedupe plugins.');
  webpackconfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    }),
    new webpack.optimize.DedupePlugin()
  );

  log('Apply ExtractTextPlugin to CSS loaders.');
  webpackconfig.module.loaders.filter(loader =>
    loader.loaders && loader.loaders.find(name => /css/.test(name.split('?')[0]))
  ).forEach(loader => {
    /* eslint-disable */
    const first = head(loader.loaders);
    const rest = tail(loader.loaders);
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'));
    delete loader.loaders;
    /* eslint-enable */
  });
  webpackconfig.plugins.push(
    new ExtractTextPlugin('[name].[contenthash].css')
  );
}

module.exports = webpackconfig;
