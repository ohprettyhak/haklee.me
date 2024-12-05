import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const root = style({
  ...theme.layouts.rowBetween,
  width: '100%',
  maxWidth: theme.sizes.app,
  marginTop: theme.sizes.appSpace,
  paddingInline: theme.sizes.appSpace,
});

export const branding = style({
  ...theme.layouts.center,
  position: 'relative',
  width: rem(52),
  height: rem(52),
  border: `${rem(1)} solid ${theme.colors.gray50}`,
  borderRadius: '50%',
  backgroundColor: 'rgba(250, 250, 250, 1)',
});

export const sunglasses = style({
  position: 'absolute',
  top: 0,
  left: rem(10),
});

export const social = style({
  ...theme.layouts.centerY,
  gap: rem(16),
});

globalStyle(`${social} > a`, {
  opacity: 1,
  transition: 'opacity 0.2s ease-in-out',
});

globalStyle(`${social} > a:hover`, {
  opacity: 0.7,
});
