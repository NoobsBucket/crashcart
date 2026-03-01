const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pub-2bbed4cb70334d47bdd2825ee931d263.r2.dev' }
    ],
    unoptimized: true, // required for Cloudflare
  },
  reactStrictMode: true,
  // removed: output: 'export' — breaks API routes and Clerk
  // removed: experimental.runtime — not needed with OpenNext
};

export default nextConfig;