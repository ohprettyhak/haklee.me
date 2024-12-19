import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const root = style({
  paddingInline: theme.sizes.appSpace,
});

export const tab = style({
  paddingInline: theme.sizes.appSpace,
  marginBottom: `calc(${theme.sizes.appSpace} * 2)`,
});
