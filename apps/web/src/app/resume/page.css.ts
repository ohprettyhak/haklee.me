import { breakpoint, rem } from '@haklee/style';
import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const introduce = style({
  ...theme.layout.column,
  paddingInline: theme.size.appSpace,
  color: theme.color.text,
  fontSize: theme.fontSize.base,
  lineHeight: '180%',
  gap: rem(8),
});

export const section = style({
  marginTop: `calc(${theme.size.appSpace} * 2)`,
  paddingInline: theme.size.appSpace,
});

globalStyle(`${section} h2`, {
  color: theme.color.text,
  fontSize: theme.fontSize.lg,
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
  fontSize: theme.fontSize.md,
  fontWeight: 500,
});

export const card = style({
  paddingBlock: rem(12),
  paddingInline: rem(16),
  border: `${rem(1)} solid ${theme.color.cardBorder}`,
  borderRadius: rem(8),
  backgroundColor: theme.color.cardBackground,
  transition: 'background-color 0.3s, border-color 0.3s',
});

globalStyle(`${grid} > ${card}`, {
  marginTop: 0,
});

globalStyle(`${grid} > ${card} h3`, {
  color: theme.color.text,
  fontSize: theme.fontSize.xs,
  fontWeight: 500,
});

globalStyle(`${grid} > ${card} p`, {
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  wordBreak: 'keep-all',
});

globalStyle(`${grid} > ${card} a`, {
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  wordBreak: 'keep-all',
  textDecoration: 'underline',
  opacity: 1,
  transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
});

globalStyle(`${grid} > ${card} a:hover`, {
  opacity: 0.7,
});

globalStyle(`${card} h4`, {
  ...theme.layout.centerY,
  color: theme.color.text,
  fontSize: rem(16),
  fontWeight: 500,
  wordBreak: 'keep-all',
  gap: rem(6),
});

globalStyle(`${card} p`, {
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
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
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  wordBreak: 'keep-all',
});

globalStyle(`${card} ul > li::before`, {
  content: '•',
  position: 'absolute',
  left: 0,
  fontSize: theme.fontSize.sm,
});
