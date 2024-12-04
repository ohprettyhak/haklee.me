import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const root = style({
  ...theme.layouts.column,
  width: '100%',
  maxWidth: theme.sizes.app,
  height: '100%',
  marginInline: 'auto',
});

export const main = style({
  ...theme.layouts.column,
  paddingTop: `calc(16px * 2 + 52px)`,
  flex: 1,
});
