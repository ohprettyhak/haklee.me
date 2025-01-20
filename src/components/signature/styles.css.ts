import { globalStyle, keyframes, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

const draw = keyframes({
  '0%': { opacity: 0 },
  '100%': { strokeDashoffset: 0, opacity: 1 },
});

export const root = style({
  ...theme.layouts.center,
});

export const signature = style({
  width: rem(96),
  height: 'fit-content',
  color: theme.colors.text,
  pointerEvents: 'none',
  strokeDashoffset: 1,
  strokeDasharray: 1,
});

globalStyle(`div[data-animate='true'] ${signature} path`, {
  animation: `${draw} 1.2s linear forwards 0.5s`,
});
