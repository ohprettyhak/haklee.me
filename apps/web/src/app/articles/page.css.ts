import { breakpoint, rem } from '@haklee/style';
import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const root = style({
  paddingInline: theme.size.appSpace,
});

export const year = style({
  paddingBottom: rem(32),
});

export const heading = style({
  fontSize: theme.fontSize.lg,
  fontWeight: 600,
  marginBottom: rem(16),
});

export const list = style({
  listStyle: 'none',
});

export const card = style({
  marginBottom: rem(16),
  border: `${rem(1)} solid ${theme.color.cardBorder}`,
  borderRadius: rem(8),
  backgroundColor: theme.color.cardBackground,
  opacity: 1,
  transition: 'border-color 0.3s, background-color 0.3s, opacity 0.3s',
});

globalStyle(`${list} > ${card}:last-child`, {
  marginBottom: 0,
});

globalStyle(`${card} a`, {
  ...theme.layout.column,
  paddingBlock: rem(12),
  paddingInline: rem(16),
  flex: 1,
  gap: rem(6),

  ...breakpoint({ mobile: { ...theme.layout.rowBetween, flexDirection: 'row' } }),
});

globalStyle(`${card}:hover`, {
  borderColor: theme.color.cardBorderHover,
  backgroundColor: theme.color.cardBackgroundHover,
});

globalStyle(`${card} h3`, {
  color: theme.color.text,
  fontSize: theme.fontSize.md,
  fontWeight: 600,
  marginBottom: rem(3),
});

globalStyle(`${card} p, ${card} time`, {
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  lineHeight: '160%',
});

globalStyle(`${root}:hover ${card}:not(:hover)`, {
  opacity: 0.5,
});
