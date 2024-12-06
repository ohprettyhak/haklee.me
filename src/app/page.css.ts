import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const introduce = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appSpace,
  gap: rem(6),
});

globalStyle(`${introduce} > li`, {
  color: theme.colors.text,
  fontSize: rem(16),
  fontWeight: 400,
  wordBreak: 'keep-all',
  position: 'relative',
  paddingLeft: rem(16),
  lineHeight: 1.6,
});

globalStyle(`${introduce} > li::before`, {
  content: '"•"',
  position: 'absolute',
  left: 0,
  fontSize: rem(16),
});

export const section = style({
  marginTop: `calc(${theme.sizes.appSpace} * 2)`,
  paddingInline: theme.sizes.appSpace,
});

globalStyle(`${section} h2`, {
  color: theme.colors.text,
  fontSize: rem(18),
  fontWeight: 600,
  marginBottom: rem(16),
});

export const timeline = style({
  listStyle: 'none',
});

export const item = style({
  position: 'relative',
  width: '100%',
  paddingLeft: rem(24),
  paddingBottom: rem(16),
});

globalStyle(`${item} h3`, {
  color: theme.colors.text,
  fontSize: rem(16),
  fontWeight: 500,
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

globalStyle(`${timeline} > ${item}:not(:first-child) .${line}`, {
  top: rem(2),
});

globalStyle(`${timeline} > ${item}:last-child`, {
  paddingBottom: 0,
});

globalStyle(`${timeline} > ${item}:last-child .${line}`, {
  maskImage: `linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) calc(100% - ${rem(120)}), transparent 100%)`,
});

export const card = style({
  paddingBlock: rem(12),
  paddingInline: rem(16),
  marginTop: rem(12),
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(8),
  backgroundColor: theme.colors.cardBackground,
});

globalStyle(`${card} h4`, {
  color: theme.colors.text,
  fontSize: rem(16),
  fontWeight: 500,
});

globalStyle(`${card} p`, {
  color: theme.colors.textSecondary,
  fontSize: rem(14),
  fontWeight: 400,
  marginTop: rem(4),
  lineHeight: 1.6,
});
