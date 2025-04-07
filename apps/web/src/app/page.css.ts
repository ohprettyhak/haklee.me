import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';
import { breakpoint } from '@/styles/responsive';

export const blur = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: rem(64),
  userSelect: 'none',
  pointerEvents: 'none',
  backdropFilter: 'blur(6px)',
  opacity: 0.95,
  maskImage: 'linear-gradient(to bottom, #000000 25%, transparent)',
  transform: 'translateZ(0)',
  zIndex: theme.zIndices.overlay,

  ...breakpoint({ tablet: { height: rem(96) } }),
});

export const list = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appSpace,
  gap: rem(6),
});

globalStyle(`${list} > li`, {
  position: 'relative',
  paddingLeft: rem(16),
  color: theme.colors.text,
  fontSize: theme.fontSizes.base,
  lineHeight: 1.8,
  wordBreak: 'keep-all',
});

globalStyle(`${list} > li::before`, {
  content: '•',
  position: 'absolute',
  left: 0,
  fontSize: theme.fontSizes.base,
});

export const social = style({
  color: theme.colors.textTertiary,
  textDecoration: 'none !important',
  borderBottom: `${rem(1)} solid ${theme.colors.border}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
});

export const content = style({
  paddingInline: theme.sizes.appSpace,
  marginTop: `calc(${theme.sizes.appSpace} * 2)`,
  marginBottom: rem(8),
  color: theme.colors.text,
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
});
