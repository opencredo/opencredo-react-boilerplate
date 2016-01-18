module.exports = {
  webpack: {
    devtool: 'cheap-module-eval-source-map',
  },

  compiler: {
    hash_type: 'hash',
    stats: {
      chunks: false,
      chunkModules: false,
      colors: true,
    },
  },
};
