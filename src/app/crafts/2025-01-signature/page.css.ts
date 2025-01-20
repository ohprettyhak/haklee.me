import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

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
