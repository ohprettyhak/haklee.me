import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const root = style({
  position: 'fixed',
  top: rem(16),
  left: 0,
  width: '100%',
  paddingInline: theme.sizes.appSpace,
  transform: 'translateY(0)',
  zIndex: theme.zIndices.header,
});

export const header = style({
  ...theme.layouts.rowBetween,
  width: '100%',
  maxWidth: theme.sizes.headerWidth,
  height: rem(52),
  paddingInline: theme.sizes.appSpace,
  marginInline: 'auto',
  borderRadius: rem(18),
  backgroundColor: 'rgba(250, 250, 252, 0.8)',
  backdropFilter: 'saturate(180%) blur(20px)',
});

export const branding = style({
  position: 'relative',
});
