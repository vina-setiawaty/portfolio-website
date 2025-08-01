/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
//   basePath: "/portfolio-website",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
module.exports = nextConfig