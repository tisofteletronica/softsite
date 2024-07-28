/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'instalesoft.com.br',
      }
    ],
  },
};

export default nextConfig;
