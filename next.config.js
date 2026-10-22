/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages only serves static files.
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
