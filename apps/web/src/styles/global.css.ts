import { rem } from '@haklee/style';
import { globalStyle } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle('body', {
  backgroundColor: theme.color.background,
  scrollbarGutter: 'stable',
  transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
});

globalStyle('a[rel="noreferrer noopener"][target=_blank]', {
  textDecoration: 'underline',
  wordBreak: 'keep-all',
  opacity: 1,
  transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
});

globalStyle('a[rel="noreferrer noopener"][target=_blank]:hover', {
  opacity: 0.7,
});

globalStyle('a[rel="noreferrer noopener"][target=_blank]:after', {
  content: '""',
  margin: 0,
  display: 'inline-block',
  height: rem(12),
  width: rem(12),
  backgroundColor: 'currentColor',
  mask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 15.477l-.02-9.672a.802.802 0 0 0-.218-.577c-.145-.152-.34-.228-.587-.228H8.499a.751.751 0 0 0-.777.76c0 .199.076.371.227.517.15.145.326.218.525.218h3.733l4.52-.129-1.728 1.54-9.767 9.783a.692.692 0 0 0-.232.518c0 .205.078.387.235.545a.74.74 0 0 0 .542.237.73.73 0 0 0 .527-.224l9.775-9.78 1.544-1.727-.143 4.188v4.065c0 .199.075.376.225.531.15.155.327.232.531.232.202 0 .38-.076.534-.228a.768.768 0 0 0 .23-.569Z'/%3E%3C/svg%3E")`,
  maskRepeat: 'no-repeat',
  maskSize: 'cover',
});

globalStyle(
  ':is(.gradient, [data-article] a):not([rel="noreferrer noopener"]):not([target=_blank])',
  {
    width: 'fit-content',
    color: theme.color.textTertiary,
    borderBottom: `${rem(1)} solid ${theme.color.border}`,
    boxDecorationBreak: 'clone',
    background: `linear-gradient(90deg, #833ab4 0%, #fd1d1d 25%, #C06C84 50%, ${theme.color.textTertiary} 50%, ${theme.color.textTertiary} 100%)`,
    backgroundClip: 'text',
    backgroundSize: '200% 100%',
    backgroundPosition: '100%',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
);

globalStyle(
  ':is(.gradient, [data-article] a):not([rel="noreferrer noopener"]):not([target=_blank]):hover',
  {
    color: 'transparent',
    backgroundPosition: '0',
  },
);

globalStyle('::selection', {
  backgroundColor: theme.color.selection,
});
