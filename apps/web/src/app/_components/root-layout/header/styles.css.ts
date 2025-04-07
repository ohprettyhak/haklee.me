import { rem } from '@haklee/style';
import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const root = style({
  ...theme.layout.rowBetween,
  width: '100%',
  maxWidth: theme.size.app,
  marginTop: theme.size.appSpace,
  paddingInline: theme.size.appSpace,
  zIndex: theme.zIndex.header,
});

export const branding = style({
  ...theme.layout.center,
  position: 'relative',
  width: rem(52),
  height: rem(52),
  border: `${rem(1)} solid ${theme.color.gray50}`,
  borderRadius: '50%',
  backgroundColor: 'rgba(250, 250, 250, 1)',
});

export const sunglasses = style({
  position: 'absolute',
  top: 0,
  left: rem(10),
});

export const menu = style({
  ...theme.layout.centerY,
  gap: rem(16),
});
