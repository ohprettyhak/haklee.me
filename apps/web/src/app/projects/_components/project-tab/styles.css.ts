import { rem } from '@haklee/style';
import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const root = style({
  ...theme.layout.center,
  width: 'fit-content',
  marginLeft: rem(-10),
});

export const wrapper = style({
  ...theme.layout.centerY,
  position: 'relative',
  justifyContent: 'space-between',
});

export const tab = style({
  paddingBlock: rem(6),
  paddingInline: rem(10),
  color: theme.color.textSecondary,
  fontWeight: 500,
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'color 0.3s',
});

export const active = style({
  color: theme.color.text,
});

export const behind = style({
  position: 'absolute',
  bottom: 0,
  height: '100%',
  borderRadius: rem(8),
  backgroundColor: theme.color.tabBehind,
  zIndex: theme.zIndex.behind,
});
