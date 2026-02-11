const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.in',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  webpack: (config, { isServer }) => {
    // Ignore Supabase Edge Functions files
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^.*\/supabase\/functions\/.*$/,
      })
    );
    
    return config;
  },
}

module.exports = nextConfig

