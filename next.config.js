/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: '/blog/1',
      },
    ]
  },
}

module.exports = nextConfig
