module.exports = {
  images: {
    domains: ['source.unsplash.com', 'i.ytimg.com'],
  },
  webpack: (config) => {
    Object.assign(config.resolve.alias, {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    });
    return config;
  },
};
