import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';
import { breakpoint } from '@/styles/responsive.css';

export const item = style({
  paddingBottom: rem(32),
});

export const heading = style({
  fontSize: rem(18),
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

export const card = style({
  ...theme.layouts.column,
  width: '100%',
  paddingBlock: rem(12),
  paddingInline: rem(16),
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(8),
  backgroundColor: theme.colors.cardBackground,
  transition: 'background-color 0.3s, border-color 0.3s',

  ':hover': {
    borderColor: theme.colors.cardBorderHover,
    backgroundColor: theme.colors.cardBackgroundHover,
  },
});

globalStyle(`${card} h3`, {
  marginTop: rem(12),
  color: theme.colors.text,
  fontWeight: 500,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const cover = style({
  position: 'relative',
  width: '100%',
  marginTop: rem(8),
  aspectRatio: '1200 / 630',
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(8),
  overflow: 'hidden',
});

globalStyle(`${cover} > img`, {
  objectFit: 'cover',
  userSelect: 'none',
});

export const metadata = style({
  color: theme.colors.textSecondary,
  fontSize: rem(12),
  fontWeight: 500,
  wordBreak: 'keep-all',
});

export const description = style({
  marginTop: rem(2),
  color: theme.colors.textSecondary,
  fontSize: rem(14),
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});
