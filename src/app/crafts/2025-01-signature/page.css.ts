import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const root = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appSpace,
});

export const signature = style({
  ...theme.layouts.center,
  width: '100%',
  height: rem(312),
  marginTop: rem(36),
  border: `${rem(1)} solid ${theme.colors.craftBorder}`,
  borderRadius: rem(16),
  overflow: 'hidden',
});

export const refresh = style({
  marginTop: rem(24),
});

export const title = style({
  marginTop: rem(36),
  color: theme.colors.text,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.xl,
  fontWeight: 600,
});

export const description = style({
  marginTop: rem(8),
  color: theme.colors.textSecondary,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.sm,
});
