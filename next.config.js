module.exports = {
  async redirects() {
    return [
      {
        source: '/compromiso',
        destination: '/',
        permanent: true,
      },
    ];
  },
  env: {
    hotjar: {
      id: 2857302,
      version: 6,
    },
  },
  webpack(config, { isServer }) {
    if (isServer) {
      require('./scripts/optimize-svg');
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
