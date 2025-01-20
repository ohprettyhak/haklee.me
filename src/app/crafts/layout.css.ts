import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const root = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appSpace,
  color: theme.colors.text,
});
