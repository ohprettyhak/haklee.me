import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';
import { breakpoint } from '@/styles/responsive.css';

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

export const introduce = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appSpace,
  gap: rem(6),
});

globalStyle(`${introduce} > li`, {
  position: 'relative',
  paddingLeft: rem(16),
  color: theme.colors.text,
  fontSize: rem(16),
  fontWeight: 400,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

globalStyle(`${introduce} > li::before`, {
  content: '•',
  position: 'absolute',
  left: 0,
  fontSize: rem(16),
});
