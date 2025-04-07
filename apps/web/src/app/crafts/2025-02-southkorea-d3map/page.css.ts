import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const iframe = style({
  marginTop: rem(36),
  border: `${rem(1)} solid ${theme.colors.craftBorder}`,
  borderRadius: rem(16),
  overflow: 'hidden',
});
