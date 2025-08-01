/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export', // required for static export
    basePath: isGithubPages ? '/portfolio-website' : '',
    assetPrefix: isGithubPages ? '/portfolio-website/public/' : '',
};
export default nextConfig;
