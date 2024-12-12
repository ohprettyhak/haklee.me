import { keyframes, style } from '@vanilla-extract/css';

import { theme } from '@/styles';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: theme.zIndices.modal,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  inset: 0,

  selectors: {
    '&[data-state="open"]': {
      animation: `${fadeIn} 300ms ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 200ms ease-out`,
    },
  },
});
