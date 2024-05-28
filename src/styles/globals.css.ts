import { globalStyle } from '@vanilla-extract/css';

import './layers.css';
import './reset.css';
import { theme } from '@/styles/styles.css';

globalStyle('html', {
  height: '100%',
});

globalStyle('body', {
  ...theme.layouts.columnCenterX,
  height: '100%',
  paddingBottom: 'env(safe-area-inset-bottom)',
  color: theme.colors.black,
  fontFamily: `"IBM Plex Sans KR", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  backgroundColor: theme.colors.white,
});

globalStyle('::selection', {
  backgroundColor: theme.colors.blackAlpha20,
});

globalStyle('a', {
  opacity: 1,
  transition: 'all 0.2s ease',
});

globalStyle('a:hover', {
  opacity: 0.7,
});
