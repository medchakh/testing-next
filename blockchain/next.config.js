/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gateway.ipfscdn.io',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
}

module.exports = nextConfig
