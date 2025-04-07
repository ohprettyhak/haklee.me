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

export const list = style({
  listStyle: 'none',
});

export const card = style({
  marginBottom: rem(16),
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(8),
  backgroundColor: theme.colors.cardBackground,
  opacity: 1,
  transition: 'border-color 0.3s, background-color 0.3s, opacity 0.3s',
});

globalStyle(`${list} > ${card}:last-child`, {
  marginBottom: 0,
});

globalStyle(`${card} a`, {
  ...theme.layouts.column,
  paddingBlock: rem(12),
  paddingInline: rem(16),
  flex: 1,
  gap: rem(6),

  ...breakpoint({ mobile: { ...theme.layouts.rowBetween, flexDirection: 'row' } }),
});

globalStyle(`${card}:hover`, {
  borderColor: theme.colors.cardBorderHover,
  backgroundColor: theme.colors.cardBackgroundHover,
});

globalStyle(`${card} h3`, {
  color: theme.colors.text,
  fontSize: theme.fontSizes.md,
  fontWeight: 600,
  marginBottom: rem(3),
});

globalStyle(`${card} p, ${card} time`, {
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.sm,
  lineHeight: '160%',
});

globalStyle(`${root}:hover ${card}:not(:hover)`, {
  opacity: 0.5,
});
