import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const root = style({
  paddingInline: theme.sizes.appSpace,
  color: theme.colors.text,
});
