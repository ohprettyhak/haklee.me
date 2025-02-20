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

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -50%) translateY(4px)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%)',
  },
});

const slideDownAndFade = keyframes({
  from: {
    opacity: 1,
    transform: 'translate(-50%, -50%)',
  },
  to: {
    opacity: 0,
    transform: 'translate(-50%, -50%) translateY(4px)',
  },
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: theme.zIndices.modal,
  backgroundColor: theme.colors.modalOverlay,
  inset: 0,

  selectors: {
    '&[data-state="open"]': {
      animation: `${fadeIn} 300ms ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 300ms ease-out`,
    },
  },
});

export const content = style({
  position: 'fixed',
  left: '50%',
  top: '50%',
  display: 'grid',
  width: '100%',
  maxWidth: rem(560),
  border: `${rem(1)} solid ${theme.colors.modalBorder}`,
  borderRadius: rem(16),
  backgroundColor: theme.colors.modalBackground,
  backdropFilter: `blur(${rem(4)})`,
  boxShadow: `0 ${rem(16)} ${rem(70)} rgba(0, 0, 0, 0.2)`,
  transform: 'translate(-50%, -50%)',
  zIndex: theme.zIndices.modalContent,

  selectors: {
    '&[data-state="open"]': {
      animation: `${slideUpAndFade} 300ms ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${slideDownAndFade} 300ms ease-out`,
    },
  },
});
