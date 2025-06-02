import { rem } from '@haklee/style';
import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const item = style({
  position: 'relative',
  width: '100%',
  paddingLeft: rem(24),
  paddingBottom: rem(16),
});

export const line = style({
  position: 'absolute',
  top: rem(16),
  left: rem(6),
  bottom: 0,
  borderLeft: `${rem(2)} dashed ${theme.color.line}`,
  transition: 'border-color 0.3s',
});

globalStyle(`${item}:not(:first-child) .${line}`, {
  top: rem(2),
});

globalStyle(`${item}:last-child .${line}`, {
  maskImage: `linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) calc(100% - ${rem(120)}), transparent 100%)`,
});
