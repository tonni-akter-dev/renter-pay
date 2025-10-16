/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',  // Allows all paths, e.g., /seed/property1/400/250.jpg
      },
    ],
  },
};

module.exports = nextConfig;