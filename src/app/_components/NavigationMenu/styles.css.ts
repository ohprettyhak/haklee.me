import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

export const root = style({
  position: 'fixed',
  ...theme.layouts.center,
  bottom: theme.sizes.appSpace,
  width: '100%',
});

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  backdropFilter: `blur(${rem(50)})`,
  willChange: 'backdrop-filter',
  transform: 'translateZ(0)',
});

export const menu = style({
  display: 'flex',
  gap: rem(8),
  height: 'fit-content',
  paddingTop: rem(8),
});

export const menuItem = style({
  alignItems: 'center',
  backgroundColor: 'rgba(28, 27, 31, 0.03)',
  borderRadius: rem(16),
  color: theme.colors.gray950,
  display: 'flex',
  height: rem(48),
  userSelect: 'none',
});

export const menuItemActive = style({
  backgroundColor: theme.colors.gray950,
  color: theme.colors.gray0,
});

export const menuLink = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: rem(12),
});

export const menuName = style({
  ...theme.layouts.center,
  fontWeight: 600,
  height: 'fit-content',
  marginLeft: rem(4),
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
});
