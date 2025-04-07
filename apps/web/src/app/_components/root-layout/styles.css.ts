import { rem } from '@haklee/style';
import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const root = style({
  ...theme.layout.column,
  width: '100%',
  maxWidth: theme.size.app,
  height: '100%',
  marginInline: 'auto',
});

export const main = style({
  ...theme.layout.column,
  flex: 1,
  paddingTop: `calc(${theme.size.appSpace} * 2)`,
  paddingBottom: rem(96),
});
