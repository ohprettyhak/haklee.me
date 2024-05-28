import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/styles.css';

export const LayoutWrapper = style({
  ...theme.layouts.column,
  width: '100%',
  maxWidth: theme.sizes.app,
  paddingBlock: rem(64),
  paddingInline: rem(28),
  borderRadius: rem(16),
  gap: theme.spaces.xxl,
});
