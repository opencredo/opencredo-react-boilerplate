module.exports = {
  server: {
    hostname: '<your production domain>',
    port: 80,
  },

  webpack: {
    devtool: 'source-map',
    output: {
      publicPath: '/',
    },
  },

  compiler: {
    hash_type: 'chunkhash',
    stats: {
      chunks: true,
      chunkModules: true,
      colors: true,
    },
  },
};
