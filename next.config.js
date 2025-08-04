/** @type {import('next').NextConfig} */
const nextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/iat210boardgame',
  //       permanent: true, // 301 redirect
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
