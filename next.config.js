const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  images: {
    domains: ['i.udemycdn.com', 'via.placeholder.com', 'i.imgur.com'],
  },
};

module.exports = nextConfig;
