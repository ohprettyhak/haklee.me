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
});

export const menu = style({
  display: 'flex',
  gap: rem(8),
  height: 'fit-content',
});

export const menuItem = style({
  display: 'flex',
  height: rem(48),
  alignItems: 'center',
  color: theme.colors.gray950,
  userSelect: 'none',
  transform: 'translateZ(0)',
  border: `${rem(1)} solid ${theme.colors.menuBorder}`,
  borderRadius: rem(16),
  backgroundColor: 'rgba(28, 27, 31, 0.03)',
  backdropFilter: `blur(${rem(4)})`,
  willChange: 'backdrop-filter',
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
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
});
