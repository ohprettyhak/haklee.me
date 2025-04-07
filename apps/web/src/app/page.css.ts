import { breakpoint, rem } from '@haklee/style';
import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles';

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
  zIndex: theme.zIndex.overlay,

  ...breakpoint({ tablet: { height: rem(96) } }),
});

export const block = style({
  paddingInline: theme.size.appSpace,
  marginTop: `calc(${theme.size.appSpace} * 2)`,
  ':first-of-type': { marginTop: 0 },
});

export const title = style({
  marginBottom: rem(8),
  color: theme.color.text,
  fontSize: theme.fontSize.md,
  fontWeight: 500,
});

export const content = style({
  color: theme.color.text,
  fontSize: theme.fontSize.base,
  lineHeight: '180%',
  wordBreak: 'keep-all',
});

export const list = style({
  ...theme.layout.column,
  gap: rem(6),
});

globalStyle(`${list} > li`, {
  position: 'relative',
  paddingLeft: rem(16),
  color: theme.color.text,
  fontSize: theme.fontSize.base,
  lineHeight: '180%',
  wordBreak: 'keep-all',
});

globalStyle(`${list} > li::before`, {
  content: '•',
  position: 'absolute',
  left: 0,
  fontSize: theme.fontSize.base,
});

export const social = style({
  color: theme.color.textTertiary,
  textDecoration: 'none !important',
  borderBottom: `${rem(1)} solid ${theme.color.border}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
});
