

const nextConfig = {
   images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pub-2bbed4cb70334d47bdd2825ee931d263.r2.dev' }
    ]
  },
  experimental: {
    runtime: 'experimental-edge',
  },
  output: 'export',
  reactStrictMode: true,
};

