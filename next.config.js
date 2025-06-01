/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/manual/:image',
        destination: 'https://www.instalesoft.com.br/imagens/icons/:image',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

