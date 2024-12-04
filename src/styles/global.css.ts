import './reset.css';

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
