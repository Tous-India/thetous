/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thetous.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.thetous.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
