import { rem } from '@haklee/style';
import { globalStyle, keyframes, style } from '@vanilla-extract/css';

import { theme } from '@/styles';

const draw = keyframes({
  '0%': { opacity: 0 },
  '100%': { strokeDashoffset: 0, opacity: 1 },
});

export const root = style({
  ...theme.layout.center,
});

export const signature = style({
  width: rem(96),
  height: 'fit-content',
  maxHeight: '100%',
  color: theme.color.text,
  pointerEvents: 'none',
  strokeDashoffset: 1,
  strokeDasharray: 1,
});

globalStyle(`div[data-animate='true'] ${signature} path`, {
  animation: `${draw} 1.2s linear forwards 0.5s`,
});
