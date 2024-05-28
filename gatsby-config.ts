import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `haklee.me`,
    siteUrl: `https://www.haklee.me`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-vanilla-extract`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};

export default config;
