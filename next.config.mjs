const isProd = process.env.NODE_ENV === 'development'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: !isProd ? '/portfolio-website' : '',
  assetPrefix: !isProd ? '/portfolio-website/' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
