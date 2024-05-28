import { style, styleVariants } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/styles.css';

export const roundProfileImageWrapper = style({
  position: 'relative',
  width: rem(80),
  height: rem(80),
  border: `${rem(0.5)} solid ${theme.colors.blackAlpha05}`,
  borderRadius: '50%',
  overflow: 'hidden',
});

export const section = styleVariants({
  root: {
    ...theme.layouts.column,
    gap: theme.spaces.md,
  },
  title: {
    color: theme.colors.black,
    fontSize: theme.fontSizes.md,
  },
  description: {
    color: theme.colors.blackAlpha60,
    fontSize: theme.fontSizes.sm,
    wordBreak: 'keep-all',
    lineHeight: '180%',
  },
  content: {
    ...theme.layouts.column,
    gap: theme.spaces.xxl,
    ...breakpoint({ mobile: { gap: theme.spaces.xl } }),
  },
});

export const experienceGrid = styleVariants({
  root: {
    display: 'grid',
    gridTemplateColumns: `1fr`,
    gap: rem(12),
    ...breakpoint({
      mobile: { gridTemplateColumns: `${rem(156)} 1fr`, gap: theme.spaces.md },
    }),
  },

  metadataContainer: {
    ...theme.layouts.column,
    gap: theme.spaces.sm,
  },
  metadataTitle: {
    color: theme.colors.blackAlpha80,
    fontSize: theme.fontSizes.sm,
    whiteSpace: 'normal',
    ...breakpoint({ mobile: { whiteSpace: 'pre-wrap' } }),
  },
  metadataSubTitle: {
    color: theme.colors.blackAlpha60,
    fontSize: theme.fontSizes.sm,
  },

  contentContainer: {
    ...theme.layouts.column,
    gap: theme.spaces.sm,
  },
  contentTitle: {
    color: theme.colors.black,
    fontSize: theme.fontSizes.md,
    wordBreak: 'keep-all',
  },
  contentSubTitle: {
    color: theme.colors.blackAlpha80,
    fontSize: theme.fontSizes.sm,
    wordBreak: 'keep-all',
  },
  contentExternalLink: {
    width: 'fit-content',
    textDecoration: 'underline',
  },
});

export const list = styleVariants({
  root: {
    paddingTop: theme.spaces.xs,
    paddingLeft: theme.spaces.md,
    listStyleType: 'disc',
  },
  item: {
    color: theme.colors.blackAlpha60,
    fontSize: theme.fontSizes.sm,
    paddingTop: theme.spaces.sm,
  },
});

export const contactLink = style({
  color: theme.colors.black,
  fontSize: theme.fontSizes.sm,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  ':hover': {
    textDecoration: 'underline',
  },
});
