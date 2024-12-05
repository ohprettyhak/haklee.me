import './reset.css';
import './animation.css';

import { globalStyle } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle('body', {
  paddingBottom: 'env(safe-area-inset-bottom)',
  overflowX: 'hidden',
  fontFamily: theme.fonts.sans,
  backgroundColor: theme.colors.background,
});

globalStyle('[data-theme="dark"]', {
  colorScheme: 'dark',
});

globalStyle('[data-theme="light"]', {
  colorScheme: 'light',
});

globalStyle('.gradient', {
  width: 'fit-content',
  color: 'transparent',
  borderBottom: '1px solid #09021d22',
  boxDecorationBreak: 'clone',
  background: `linear-gradient(90deg, #ff6f61 0%, #ffcc66 25%, #6699cc 50%, ${theme.colors.gray950} 50%, ${theme.colors.gray950} 100%)`,
  backgroundClip: 'text',
  backgroundSize: '200% 100%',
  backgroundPosition: '100%',
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
});

globalStyle('.gradient:hover', {
  backgroundPosition: '0',
});
