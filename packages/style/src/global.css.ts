import './reset.css';

import { globalStyle } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle('body', {
  paddingBottom: 'env(safe-area-inset-bottom)',
  fontFamily: theme.fontFamily.sans,
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  WebkitTextSizeAdjust: '100%',
  MozOsxFontSmoothing: 'grayscale',
  overflowX: 'hidden',
  overflowY: 'scroll',
});

globalStyle('[data-theme="light"]', {
  colorScheme: 'light',
});

globalStyle('[data-theme="dark"]', {
  colorScheme: 'dark',
});
