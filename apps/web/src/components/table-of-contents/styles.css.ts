import { breakpoint, rem } from '@haklee/style';
import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const list = style({
  display: 'none',
  width: '100%',
  height: 'fit-content',
  listStyle: 'none',
  gap: rem(4),

  ...breakpoint({ tablet: { ...theme.layout.column } }),
});

export const item = style({
  color: theme.color.toc,
  fontSize: theme.fontSize.sm,
  fontWeight: 400,
  textAlign: 'left',
  wordBreak: 'keep-all',
  cursor: 'pointer',
  transition: 'color 0.2s, font-weight 0.2s',

  ':hover': {
    color: theme.color.text,
    fontWeight: 500,
  },
});

export const active = style({
  color: theme.color.text,
  fontWeight: 500,
});
