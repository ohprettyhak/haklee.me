import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const button = style({
  ...theme.layouts.center,
  width: rem(48),
  height: rem(48),
  alignSelf: 'center',
  border: `${rem(1)} solid ${theme.colors.menuBorder}`,
  borderRadius: '50%',
  backgroundColor: theme.colors.menuBackground,
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: theme.colors.menuActiveBackground,
  },
});
