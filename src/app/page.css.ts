import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const introduce = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appSpace,
  gap: rem(6),
});

globalStyle(`${introduce} > li`, {
  color: theme.colors.text,
  fontSize: rem(16),
  fontWeight: 400,
  wordBreak: 'keep-all',
  position: 'relative',
  paddingLeft: rem(16),
  lineHeight: 1.6,
});

globalStyle(`${introduce} > li::before`, {
  content: '"•"',
  position: 'absolute',
  left: 0,
  fontSize: rem(16),
});

export const section = style({
  marginTop: `calc(${theme.sizes.appSpace} * 2)`,
  paddingInline: theme.sizes.appSpace,
});

globalStyle(`${section} h2`, {
  color: theme.colors.text,
  fontSize: rem(20),
  fontWeight: 600,
  marginBottom: rem(16),
});
