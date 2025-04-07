import { globalStyle } from '@vanilla-extract/css';

import { theme, rem, breakpoint } from '@/styles/index';

globalStyle('article hr', {
  width: '100%',
  height: rem(2),
  marginBlock: rem(32),
  border: 0,
  borderRadius: rem(2),
  backgroundColor: theme.colors.line,
});

globalStyle('[data-article-content]', {
  ...theme.layouts.column,
  gap: rem(18),
});

globalStyle('[data-article-content] h2', {
  fontSize: theme.fontSizes.lg,
  paddingTop: rem(48),
});

globalStyle('[data-article-content] h3', {
  fontSize: theme.fontSizes.md,
  paddingTop: rem(36),
});

globalStyle('[data-article-content] h4, [data-article-content] h5, [data-article-content] h6', {
  fontSize: theme.fontSizes.base,
  paddingTop: rem(24),
});

globalStyle(
  '[data-article-content] h2, [data-article-content] h3, [data-article-content] h4, [data-article-content] h5, [data-article-content] h6',
  {
    color: theme.colors.text,
    fontWeight: 600,
    scrollMarginTop: rem(64),
  },
);

globalStyle(`[data-article-content] ol`, {
  counterReset: 'basics-ol',
});

globalStyle('[data-article-content] ul li, [data-article-content] ol li', {
  position: 'relative',
  paddingLeft: rem(16),
  paddingBottom: rem(8),
  color: theme.colors.text,
  fontSize: theme.fontSizes.base,
  lineHeight: 1.8,
  listStyle: 'none',
});

globalStyle(`[data-article-content] ol li::before`, {
  content: `counter(basics-ol) ". "`,
  counterIncrement: 'basics-ol',
  position: 'absolute',
  left: 0,
  fontSize: theme.fontSizes.base,
});

globalStyle(`[data-article-content] ul li::before`, {
  content: '•',
  position: 'absolute',
  left: 0,
  fontSize: theme.fontSizes.base,
});

globalStyle('[data-article-content] p', {
  color: theme.colors.text,
  fontSize: theme.fontSizes.base,
  fontWeight: 400,
  lineHeight: '180%',
});

globalStyle('[data-article-content] strong', {
  fontWeight: 600,
});

globalStyle('[data-article-content] small', {
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.xs,
});

globalStyle('[data-article-content] small > code', {
  paddingBlock: rem(1.5),
  paddingInline: rem(3),
  color: theme.colors.textSecondary,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.xs,
  backgroundColor: theme.colors.cardBackgroundHover,
  borderRadius: rem(4),
});

globalStyle('[data-article-content] [class^=blockquote-]', {
  marginBlock: rem(16),
  marginInline: 0,
});

globalStyle('[data-article-content] [class^=blockquote-] > p', {
  padding: 0,
  margin: 0,
});

globalStyle('[data-article-content] p > code', {
  paddingBlock: rem(2),
  paddingInline: rem(4),
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.sm,
  lineHeight: 1.3,
  backgroundColor: theme.colors.cardBackgroundHover,
  borderRadius: rem(4),
});

globalStyle('[data-article-content] img, [data-article-content] video', {
  maxWidth: '100%',
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(10),
  objectFit: 'cover',
  overflow: 'hidden',
  userSelect: 'none',
});

globalStyle('[data-article-content] p > img, [data-article-content] video', {
  marginBlock: rem(16),
});

globalStyle('[data-article-content] .image-wrapper', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  paddingBlock: rem(16),
  width: '100%',
  gap: rem(16),
});

globalStyle('[data-article-content] .image-wrapper.expand', {
  position: 'static',
  transform: 'initial',

  ...breakpoint({
    desktop: {
      position: 'relative',
      left: '50%',
      width: rem(1000),
      transform: 'translateX(-50%)',
    },
  }),
});

globalStyle('[data-article-content] .image-wrapper:has(:nth-child(2))', {
  ...breakpoint({ tablet: { gridTemplateColumns: 'repeat(2, 1fr)' } }),
});

globalStyle('[data-article-content] .image-wrapper:has(:nth-child(3))', {
  ...breakpoint({ tablet: { gridTemplateColumns: 'repeat(3, 1fr)' } }),
});
