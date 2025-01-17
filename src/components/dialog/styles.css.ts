import { keyframes, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

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

export const content = style({
  position: 'fixed',
  left: '50%',
  top: '50%',
  display: 'grid',
  maxWidth: rem(327),
  width: '100%',
  transform: 'translate(-50%, -50%)',
  border: 0,
  borderRadius: rem(8),
  backgroundColor: theme.colors.background,
  padding: rem(22),
  zIndex: theme.zIndices.modalContent,

  selectors: {
    '&[data-state="open"]': {
      animation: `${fadeIn} 200ms ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 200ms ease-out`,
    },
  },
});
