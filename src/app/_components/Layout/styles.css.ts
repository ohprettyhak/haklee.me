import { style } from '@vanilla-extract/css';

import { rem } from '@/styles';
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
  flex: 1,
  paddingTop: `calc(${theme.sizes.appSpace} * 2)`,
  paddingBottom: rem(96),
});
