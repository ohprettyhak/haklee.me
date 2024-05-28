import path from 'path';
import { GatsbyNode } from 'gatsby';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  getConfig,
  actions,
}) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@/sections': path.resolve(__dirname, 'src/sections'),
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/styles': path.resolve(__dirname, 'src/styles'),
        '@/constants': path.resolve(__dirname, 'src/constants'),
      },
    },
  });
};
