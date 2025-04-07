import { breakpoint, rem } from '@haklee/style';
import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const backButton = style({
  marginInline: theme.size.appSpace,
});

export const root = style({
  ...theme.layout.column,
  position: 'relative',
  paddingInline: theme.size.appSpace,
  marginTop: rem(32),
});

export const title = style({
  color: theme.color.text,
  fontSize: theme.fontSize.lg,
  fontWeight: 500,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const description = style({
  marginTop: rem(2),
  marginBottom: rem(4),
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const time = style({
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.xs,
  fontWeight: 500,
  wordBreak: 'keep-all',
});

export const sidebar = style({
  position: 'fixed',
  display: 'none',
  top: 0,
  right: 0,
  width: '100%',
  maxWidth: '25%',
  height: '100%',
  transform: `translateX(calc(100% + ${theme.size.appSpace} * 2)) !important`,

  ...breakpoint({ tablet: { display: 'block' } }),
});

export const navigation = style({
  position: 'sticky',
  top: `calc(${rem(64)} + ${theme.size.appSpace})`,
});

export const signature = style({
  marginTop: `calc(${theme.size.appSpace} * 2)`,
  width: '100%',
  height: rem(42),
});

export const giscus = style({
  marginTop: `calc(${theme.size.appSpace} * 2)`,
  paddingInline: theme.size.appSpace,
});
