module.exports = {
  server: {
    hostname: 'beta.compartirespacios.com',
    port: 80,
  },

  webpack: {
    devtool: 'source-map',
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
