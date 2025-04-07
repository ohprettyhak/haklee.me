import { rem } from '@haklee/style';
import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const signature = style({
  ...theme.layout.center,
  width: '100%',
  height: rem(312),
  marginTop: rem(36),
  border: `${rem(1)} solid ${theme.color.craftBorder}`,
  borderRadius: rem(16),
  overflow: 'hidden',
});

export const refresh = style({
  marginTop: rem(24),
});
