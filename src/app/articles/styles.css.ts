import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';
import { breakpoint } from '@/styles/responsive.css';

export const root = style({
  paddingInline: theme.sizes.appSpace,
  listStyle: 'none',
});

export const year = style({
  position: 'relative',
  paddingLeft: rem(24),
  paddingBottom: rem(32),
});

globalStyle(`${root} > ${year}:last-child`, {
  paddingBottom: 0,
});

globalStyle(`${year} h2`, {
  color: theme.colors.text,
  fontSize: rem(18),
  fontWeight: 600,
  wordBreak: 'keep-all',
  marginBottom: rem(16),
});

export const line = style({
  position: 'absolute',
  top: rem(16),
  left: rem(6),
  bottom: 0,
  borderLeft: `${rem(2)} dashed ${theme.colors.line}`,
  transition: 'border-color 0.3s',
});

export const dot = style({
  position: 'absolute',
  top: rem(7),
  left: rem(3),
  width: rem(8),
  height: rem(8),
  borderRadius: '50%',
  backgroundColor: theme.colors.border,
  transition: 'background-color 0.3s',
});

globalStyle(`${root} > ${year}:not(:first-child) .${line}`, {
  top: rem(2),
});

globalStyle(`${root} > ${year}:last-child .${line}`, {
  maskImage: `linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) calc(100% - ${rem(120)}), transparent 100%)`,
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
  fontSize: rem(16),
  fontWeight: 600,
  marginBottom: rem(3),
});

globalStyle(`${card} p, ${card} time`, {
  color: theme.colors.textSecondary,
  fontSize: rem(14),
  lineHeight: '160%',
});

globalStyle(`${root}:hover ${card}:not(:hover)`, {
  opacity: 0.5,
});
