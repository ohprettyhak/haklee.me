import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const introduce = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appSpace,
  gap: rem(6),
});

globalStyle(`${introduce} > li`, {
  position: 'relative',
  paddingLeft: rem(16),
  color: theme.colors.text,
  fontSize: rem(16),
  fontWeight: 400,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

globalStyle(`${introduce} > li::before`, {
  content: '•',
  position: 'absolute',
  left: 0,
  fontSize: rem(16),
});
