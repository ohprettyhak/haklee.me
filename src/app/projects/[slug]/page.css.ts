import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const root = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appSpace,
});

export const metadata = style({
  marginTop: rem(16),
  color: theme.colors.textSecondary,
  fontSize: rem(12),
  fontWeight: 500,
  wordBreak: 'keep-all',
});

export const team = style({
  marginTop: rem(5),
  color: theme.colors.textSecondary,
  fontSize: rem(12),
  fontWeight: 500,
  wordBreak: 'keep-all',
});

export const cover = style({
  position: 'relative',
  width: '100%',
  marginTop: rem(32),
  aspectRatio: '1200 / 630',
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(10),
  overflow: 'hidden',
});

globalStyle(`${cover} > img`, {
  objectFit: 'cover',
  userSelect: 'none',
});

export const title = style({
  marginTop: rem(10),
  color: theme.colors.text,
  fontSize: rem(18),
  fontWeight: 500,
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const description = style({
  marginTop: rem(2),
  color: theme.colors.textSecondary,
  fontSize: rem(14),
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

export const link = style({
  ...theme.layouts.centerY,
  marginTop: rem(16),
  gap: rem(8),
});

globalStyle(`${link} a`, {
  ...theme.layouts.centerY,
  paddingBlock: rem(4),
  paddingInline: rem(8),
  color: theme.colors.text,
  fontSize: rem(13),
  fontWeight: 500,
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(6),
  backgroundColor: theme.colors.cardBackground,
  transition: 'background-color 0.3s',
  gap: rem(4),
});

globalStyle(`${link} a:hover`, {
  backgroundColor: theme.colors.cardBackgroundHover,
});

export const content = style({
  color: theme.colors.text,
});
