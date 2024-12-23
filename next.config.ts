import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {};

export default withVanillaExtract(withContentlayer(nextConfig));
