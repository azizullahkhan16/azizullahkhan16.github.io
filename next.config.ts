import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  typescript: {
    // tsc --noEmit passes cleanly; skip the redundant in-build check
    // that crashes the worker on Windows due to memory limits
    ignoreBuildErrors: true,
  },
}

export default nextConfig
