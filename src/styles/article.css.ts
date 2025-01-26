import { globalStyle } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

globalStyle('.gradient, [data-article] a:not([rel="noreferrer noopener"][target=_blank])', {
  width: 'fit-content',
  color: theme.colors.textTertiary,
  borderBottom: `${rem(1)} solid ${theme.colors.border}`,
  boxDecorationBreak: 'clone',
  background: `linear-gradient(90deg, #833ab4 0%, #fd1d1d 25%, #C06C84 50%, ${theme.colors.textTertiary} 50%, ${theme.colors.textTertiary} 100%)`,
  backgroundClip: 'text',
  backgroundSize: '200% 100%',
  backgroundPosition: '100%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
});

globalStyle(
  '.gradient:hover, [data-article] a:not([rel="noreferrer noopener"][target=_blank]):hover',
  {
    color: 'transparent',
    backgroundPosition: '0',
  },
);

globalStyle('[data-article] h1', {
  fontSize: theme.fontSizes.xl,
  lineHeight: 1.25,
});

globalStyle('[data-article] h2', {
  fontSize: theme.fontSizes.lg,
  lineHeight: 1.2,
});

globalStyle('[data-article] h3', {
  fontSize: theme.fontSizes.md,
  lineHeight: 1.1,
});

globalStyle('[data-article] h4, [data-article] h5, [data-article] h6', {
  fontSize: theme.fontSizes.base,
  lineHeight: 1.3,
});

globalStyle(
  '[data-article] h1, [data-article] h2, [data-article] h3, [data-article] h4, [data-article] h5, [data-article] h6',
  {
    color: theme.colors.text,
    fontWeight: 600,
    paddingTop: rem(28),
    paddingBottom: rem(20),
    scrollMarginTop: rem(64),
  },
);

globalStyle('[data-article] ul, [data-article] ol', {
  paddingBottom: rem(20),
});

globalStyle(`[data-article] ol`, {
  counterReset: 'basics-ol',
});

globalStyle('[data-article] ul li, [data-article] ol li', {
  position: 'relative',
  paddingLeft: rem(16),
  paddingBottom: rem(8),
  color: theme.colors.text,
  fontSize: theme.fontSizes.base,
  lineHeight: 1.8,
  listStyle: 'none',
});

globalStyle(`[data-article] ol li::before`, {
  content: `counter(basics-ol) ". "`,
  counterIncrement: 'basics-ol',
  position: 'absolute',
  left: 0,
  fontSize: theme.fontSizes.base,
});

globalStyle(`[data-article] ul li::before`, {
  content: '•',
  position: 'absolute',
  left: 0,
  fontSize: theme.fontSizes.base,
});

globalStyle('[data-article] p', {
  color: theme.colors.text,
  fontSize: theme.fontSizes.base,
  fontWeight: 400,
  lineHeight: '180%',
  paddingBottom: rem(18),
});

globalStyle('[data-article] strong', {
  fontWeight: 600,
});

globalStyle('[data-article] small', {
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.xs,
});

globalStyle('[data-article] small > code', {
  paddingBlock: rem(1.5),
  paddingInline: rem(3),
  color: theme.colors.textSecondary,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.xs,
  backgroundColor: theme.colors.cardBackgroundHover,
  borderRadius: rem(4),
});

globalStyle('[data-article] p > img', {
  maxWidth: '100%',
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(10),
  objectFit: 'cover',
  overflow: 'hidden',
  userSelect: 'none',
});

globalStyle('[data-article] [class^=blockquote-] > p', {
  padding: 0,
  margin: 0,
});

globalStyle('[data-article] p > code', {
  paddingBlock: rem(2),
  paddingInline: rem(4),
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.sm,
  lineHeight: 1.3,
  backgroundColor: theme.colors.cardBackgroundHover,
  borderRadius: rem(4),
});

globalStyle('[data-article] video', {
  maxWidth: '100%',
  marginBottom: rem(18),
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(10),
  overflow: 'hidden',
  transform: 'translateZ(0)',
});

globalStyle('article hr', {
  width: '100%',
  height: rem(2),
  marginBlock: rem(32),
  border: 0,
  borderRadius: rem(2),
  backgroundColor: theme.colors.line,
});
