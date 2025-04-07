import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const root = style({
  paddingInline: theme.size.appSpace,
});

export const tab = style({
  paddingInline: theme.size.appSpace,
  marginBottom: `calc(${theme.size.appSpace} * 2)`,
});
