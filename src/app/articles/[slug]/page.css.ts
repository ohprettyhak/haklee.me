import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const root = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appSpace,
});

export const title = style({
  marginTop: rem(32),
  color: theme.colors.text,
  fontSize: rem(18),
  fontWeight: 500,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const description = style({
  marginTop: rem(2),
  marginBottom: rem(4),
  color: theme.colors.textSecondary,
  fontSize: rem(14),
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const time = style({
  color: theme.colors.textSecondary,
  fontSize: rem(12),
  fontWeight: 500,
  wordBreak: 'keep-all',
});
