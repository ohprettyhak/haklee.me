import { rem } from '@haklee/style';
import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const root = style({
  ...theme.layout.column,
  paddingInline: theme.size.appSpace,
});

export const metadata = style({
  marginTop: rem(16),
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.xs,
  fontWeight: 500,
  wordBreak: 'keep-all',
});

export const team = style({
  marginTop: rem(5),
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.xs,
  fontWeight: 500,
  wordBreak: 'keep-all',
});

export const cover = style({
  position: 'relative',
  width: '100%',
  marginTop: rem(32),
  aspectRatio: '1200 / 630',
  border: `${rem(1)} solid ${theme.color.cardBorder}`,
  borderRadius: rem(10),
  overflow: 'hidden',
});

globalStyle(`${cover} > img`, {
  objectFit: 'cover',
  userSelect: 'none',
});

export const title = style({
  marginTop: rem(10),
  color: theme.color.text,
  fontSize: theme.fontSize.lg,
  fontWeight: 500,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const description = style({
  marginTop: rem(2),
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const link = style({
  ...theme.layout.centerY,
  marginTop: rem(16),
  gap: rem(8),
});

globalStyle(`${link} a`, {
  ...theme.layout.centerY,
  paddingBlock: rem(4),
  paddingInline: rem(8),
  color: theme.color.text,
  fontSize: theme.fontSize.xs,
  fontWeight: 500,
  border: `${rem(1)} solid ${theme.color.cardBorder}`,
  borderRadius: rem(6),
  backgroundColor: theme.color.cardBackground,
  transition: 'background-color 0.3s',
  gap: rem(4),
});

globalStyle(`${link} a:hover`, {
  backgroundColor: theme.color.cardBackgroundHover,
});
