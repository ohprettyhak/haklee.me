import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';
import { breakpoint } from '@/styles/responsive.css';

export const introduce = style({
  paddingInline: theme.sizes.appSpace,
  color: theme.colors.text,
  fontSize: theme.fontSizes.base,
});

export const section = style({
  marginTop: `calc(${theme.sizes.appSpace} * 2)`,
  paddingInline: theme.sizes.appSpace,
});

globalStyle(`${section} h2`, {
  color: theme.colors.text,
  fontSize: theme.fontSizes.lg,
  fontWeight: 600,
  wordBreak: 'keep-all',
  marginBottom: rem(16),
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '100%',
  gap: rem(16),

  ...breakpoint({ mobile: { gridTemplateColumns: 'repeat(3, 1fr)' } }),
});

export const duration = style({
  marginBottom: rem(12),
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
});

export const card = style({
  paddingBlock: rem(12),
  paddingInline: rem(16),
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(8),
  backgroundColor: theme.colors.cardBackground,
  transition: 'background-color 0.3s, border-color 0.3s',
});

globalStyle(`${grid} > ${card}`, {
  marginTop: 0,
});

globalStyle(`${grid} > ${card} h3`, {
  color: theme.colors.text,
  fontSize: theme.fontSizes.xs,
  fontWeight: 500,
});

globalStyle(`${grid} > ${card} p`, {
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.sm,
  wordBreak: 'keep-all',
});

globalStyle(`${grid} > ${card} a`, {
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.sm,
  wordBreak: 'keep-all',
  textDecoration: 'underline',
  opacity: 1,
  transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
});

globalStyle(`${grid} > ${card} a:hover`, {
  opacity: 0.7,
});

globalStyle(`${card} h4`, {
  ...theme.layouts.centerY,
  color: theme.colors.text,
  fontSize: rem(16),
  fontWeight: 500,
  wordBreak: 'keep-all',
  gap: rem(6),
});

globalStyle(`${card} p`, {
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.sm,
  marginTop: rem(4),
  lineHeight: 1.6,
  wordBreak: 'keep-all',
});

globalStyle(`${card} ul`, {
  listStyle: 'none',
  marginTop: rem(8),
});

globalStyle(`${card} ul > li`, {
  position: 'relative',
  marginTop: rem(4),
  paddingLeft: rem(16),
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.sm,
  wordBreak: 'keep-all',
});

globalStyle(`${card} ul > li::before`, {
  content: '•',
  position: 'absolute',
  left: 0,
  fontSize: theme.fontSizes.sm,
});
