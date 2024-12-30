import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';
import { breakpoint } from '@/styles/responsive.css';

export const backButton = style({
  marginInline: theme.sizes.appSpace,
});

export const root = style({
  ...theme.layouts.column,
  position: 'relative',
  paddingInline: theme.sizes.appSpace,
  marginTop: rem(32),
});

export const title = style({
  color: theme.colors.text,
  fontSize: rem(18),
  fontWeight: 500,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const description = style({
  marginTop: rem(2),
  marginBottom: rem(4),
  color: theme.colors.textSecondary,
  fontSize: rem(14),
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const time = style({
  color: theme.colors.textSecondary,
  fontSize: rem(12),
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
  transform: `translateX(calc(100% + ${theme.sizes.appSpace} * 2)) !important`,

  ...breakpoint({ tablet: { display: 'block' } }),
});

export const navigation = style({
  position: 'sticky',
  top: `calc(${rem(64)} + ${theme.sizes.appSpace})`,
});

export const giscus = style({
  marginTop: `calc(${theme.sizes.appSpace} * 2)`,
  paddingInline: theme.sizes.appSpace,
});
