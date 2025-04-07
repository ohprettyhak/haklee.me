import { rem } from '@haklee/style';
import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const iframe = style({
  marginTop: rem(36),
  border: `${rem(1)} solid ${theme.color.craftBorder}`,
  borderRadius: rem(16),
  overflow: 'hidden',
});
