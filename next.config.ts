/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      // maak /tools/action-tracker naar index.html
      { source: '/tools/action-tracker', destination: '/tools/action-tracker/index.html' },
      // maak /tools/action-tracker/team naar team.html
      { source: '/tools/action-tracker/team', destination: '/tools/action-tracker/team.html' },
    ];
  },
};

export default nextConfig;