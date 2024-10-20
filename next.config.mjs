import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  experimental: {
    ppr: 'incremental',
  },
  reactStrictMode: true,
});

export default nextConfig;

