import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const root = style({
  ...theme.layouts.center,
  width: 'fit-content',
});

export const tabWrapper = style({
  ...theme.layouts.centerY,
  position: 'relative',
  justifyContent: 'space-between',
});

export const tab = style({
  paddingBlock: rem(6),
  paddingInline: rem(10),
  color: theme.colors.textSecondary,
  fontWeight: 500,
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'color 0.3s, font-weight 0.3s',
});

export const active = style({
  color: theme.colors.text,
  fontWeight: 600,
});

export const behind = style({
  position: 'absolute',
  bottom: 0,
  height: '100%',
  borderRadius: rem(8),
  backgroundColor: theme.colors.menuBackground,
  zIndex: theme.zIndices.behind,
});
