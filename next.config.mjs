/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true, // Define se o redirecionamento é permanente (301) ou temporário (302)
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/masked-page',
        destination: '/actual-page',
      },
    ];
  },
};

export default nextConfig;
