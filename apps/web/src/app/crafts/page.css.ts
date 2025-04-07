import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme, breakpoint } from '@/styles';

export const root = style({
  paddingInline: theme.sizes.appSpace,
});

export const year = style({
  paddingBottom: rem(32),
});

export const heading = style({
  fontSize: theme.fontSizes.lg,
  fontWeight: 600,
  marginBottom: rem(16),
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '100%',
  gap: rem(16),

  ...breakpoint({ mobile: { gridTemplateColumns: 'repeat(2, 1fr)' } }),
});

export const item = style({
  opacity: 1,
  transition: 'opacity 0.3s',

  ':hover': { opacity: 0.7 },
});

export const cover = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '1200 / 630',
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(8),
  overflow: 'hidden',
});

globalStyle(`${cover} > img`, {
  objectFit: 'cover',
  userSelect: 'none',
});

export const title = style({
  width: '100%',
  marginTop: rem(12),
  color: theme.colors.text,
  fontSize: theme.fontSizes.sm,
  fontFamily: theme.fonts.mono,
  fontWeight: 500,
  lineHeight: '160%',
  wordBreak: 'keep-all',
  textAlign: 'center',
});
