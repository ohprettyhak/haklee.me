import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hstatic.haklee.me',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
};

export default withVanillaExtract(withContentlayer(nextConfig));
