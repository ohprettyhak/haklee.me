import { rem } from '@haklee/style';
import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const button = style({
  ...theme.layout.center,
  width: rem(48),
  height: rem(48),
  alignSelf: 'center',
  color: theme.color.text,
  border: `${rem(1)} solid ${theme.color.menuBorder}`,
  borderRadius: '50%',
  backgroundColor: theme.color.menuBackground,
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: theme.color.menuActiveBackground,
  },
});
