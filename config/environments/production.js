module.exports = {
  server: {
    hostname: '<your production domain>',
    port: 80,
  },

  webpack: {
    devtool: 'source-map',
    output: {
      publicPath: 'http://<your production domain>',
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
