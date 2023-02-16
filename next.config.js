/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'cdn.pixabay.com', 'placeimg.com', 'www.libreriahuequito.com', 'thumbs.dreamstime.com'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: false,
  register: true,
  mode: 'production',
});

module.exports = withPWA(nextConfig);
