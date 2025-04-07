import { style } from '@vanilla-extract/css';

import { rem, theme, breakpoint } from '@/styles';

export const list = style({
  display: 'none',
  width: '100%',
  height: 'fit-content',
  listStyle: 'none',
  gap: rem(4),

  ...breakpoint({ tablet: { ...theme.layouts.column } }),
});

export const item = style({
  color: theme.colors.toc,
  fontSize: theme.fontSizes.sm,
  fontWeight: 400,
  textAlign: 'left',
  wordBreak: 'keep-all',
  cursor: 'pointer',
  transition: 'color 0.2s, font-weight 0.2s',

  ':hover': {
    color: theme.colors.text,
    fontWeight: 500,
  },
});

export const active = style({
  color: theme.colors.text,
  fontWeight: 500,
});
