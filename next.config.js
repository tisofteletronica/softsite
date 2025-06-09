/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/manual/:image',
        destination: 'https://www.instalesoft.com.br/manuais/:image',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

