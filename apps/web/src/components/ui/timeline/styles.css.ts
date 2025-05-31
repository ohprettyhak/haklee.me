import { rem } from '@haklee/style';
import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const list = style({
  listStyle: 'none',
});

export const item = style({
  position: 'relative',
  width: '100%',
  paddingLeft: rem(24),
  paddingBottom: rem(16),
});

globalStyle(`${item}:last-child`, {
  paddingBottom: 0,
});

globalStyle(`${item} img`, {
  objectFit: 'contain',
});

export const heading = style({
  color: theme.color.text,
  wordBreak: 'keep-all',
});

export const line = style({
  position: 'absolute',
  top: rem(16),
  left: rem(6),
  bottom: 0,
  borderLeft: `${rem(2)} dashed ${theme.color.line}`,
  transition: 'border-color 0.3s',
});

export const dot = style({
  position: 'absolute',
  top: rem(7),
  left: rem(3),
  width: rem(8),
  height: rem(8),
  borderRadius: '50%',
  backgroundColor: theme.color.border,
  transition: 'background-color 0.3s',
});

globalStyle(`${item}:not(:first-child) .${line}`, {
  top: rem(2),
});

globalStyle(`${item}:last-child .${line}`, {
  maskImage: `linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) calc(100% - ${rem(120)}), transparent 100%)`,
});
