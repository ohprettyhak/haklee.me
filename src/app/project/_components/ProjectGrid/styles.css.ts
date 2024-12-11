import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';
import { breakpoint } from '@/styles/responsive.css';

export const root = style({
  position: 'relative',
  width: '100%',
  paddingLeft: rem(24),
  paddingBottom: rem(32),
});

globalStyle(`${root}:last-child`, {
  paddingBottom: 0,
});

globalStyle(`${root} h2`, {
  color: theme.colors.text,
  fontSize: rem(18),
  fontWeight: 600,
  wordBreak: 'keep-all',
  marginBottom: rem(16),
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '100%',
  gap: rem(16),

  ...breakpoint({ mobile: { gridTemplateColumns: 'repeat(2, 1fr)' } }),
});

export const line = style({
  position: 'absolute',
  top: rem(16),
  left: rem(6),
  bottom: 0,
  borderLeft: `${rem(2)} dashed ${theme.colors.line}`,
  transition: 'border-color 0.3s',
});

globalStyle(`${root}:not(:first-child) .${line}`, {
  top: rem(2),
});

globalStyle(`${root}:last-child .${line}`, {
  maskImage: `linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) calc(100% - ${rem(120)}), transparent 100%)`,
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

export const card = style({
  ...theme.layouts.column,
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

globalStyle(`${card} h4`, {
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
  aspectRatio: '16 / 9',
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(8),
  overflow: 'hidden',
});

globalStyle(`${cover} > img`, {
  objectFit: 'cover',
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
