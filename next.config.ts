import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't fail the production build on ESLint problems (e.g. unescaped
  // apostrophes in page text). This lets staff overwrite content files
  // without a stray "'" breaking the Vercel deploy. Real TypeScript
  // errors still fail the build.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
