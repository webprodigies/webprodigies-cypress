/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['fmliqecnrxgzwvucipeu.supabase.co'],
  },
};

module.exports = nextConfig;
