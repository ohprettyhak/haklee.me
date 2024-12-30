import './reset.css';
import './animation.css';

import { globalStyle } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';

import { theme } from './theme.css';

// global
globalStyle('body', {
  paddingBottom: 'env(safe-area-inset-bottom)',
  overflowX: 'hidden',
  fontFamily: theme.fonts.sans,
  backgroundColor: theme.colors.background,
  transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflowY: 'scroll',
});

globalStyle('[data-theme="light"]', {
  colorScheme: 'light',
});

globalStyle('[data-theme="dark"]', {
  colorScheme: 'dark',
});

globalStyle('a[rel="noreferrer noopener"][target=_blank]', {
  textDecoration: 'underline',
  wordBreak: 'keep-all',
  opacity: 1,
  transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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

globalStyle('.gradient, [data-article] a:not([rel="noreferrer noopener"][target=_blank])', {
  width: 'fit-content',
  color: 'transparent',
  borderBottom: `${rem(1)} solid ${theme.colors.border}`,
  boxDecorationBreak: 'clone',
  background: `linear-gradient(90deg, #833ab4 0%, #fd1d1d 25%, #C06C84 50%, ${theme.colors.textTertiary} 50%, ${theme.colors.textTertiary} 100%)`,
  backgroundClip: 'text',
  backgroundSize: '200% 100%',
  backgroundPosition: '100%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
});

globalStyle(
  '.gradient:hover, [data-article] a:not([rel="noreferrer noopener"][target=_blank]):hover',
  {
    backgroundPosition: '0',
  },
);

globalStyle('::selection', {
  backgroundColor: theme.colors.selection,
});

// article
globalStyle('[data-article] h1', {
  fontSize: rem(22),
  lineHeight: 1.25,
});

globalStyle('[data-article] h2', {
  fontSize: rem(19),
  lineHeight: 1.2,
});

globalStyle('[data-article] h3', {
  fontSize: rem(17.5),
  lineHeight: 1.1,
});

globalStyle('[data-article] h4, [data-article] h5, [data-article] h6', {
  fontSize: rem(16),
  lineHeight: 1.3,
});

globalStyle(
  '[data-article] h1, [data-article] h2, [data-article] h3, [data-article] h4, [data-article] h5, [data-article] h6',
  {
    color: theme.colors.text,
    fontWeight: 700,
    paddingTop: rem(28),
    paddingBottom: rem(20),
    scrollMarginTop: rem(64),
  },
);

globalStyle('[data-article] ul, [data-article] ol', {
  paddingBottom: rem(20),
});

globalStyle(`[data-article] ol`, {
  counterReset: 'basics-ol',
});

globalStyle('[data-article] ul li, [data-article] ol li', {
  position: 'relative',
  paddingLeft: rem(16),
  paddingBottom: rem(8),
  color: theme.colors.text,
  fontSize: rem(15.5),
  lineHeight: 1.8,
  listStyle: 'none',
});

globalStyle(`[data-article] ol li::before`, {
  content: `counter(basics-ol) ". "`,
  counterIncrement: 'basics-ol',
  position: 'absolute',
  left: 0,
  fontSize: rem(15.5),
});

globalStyle(`[data-article] ul li::before`, {
  content: '•',
  position: 'absolute',
  left: 0,
  fontSize: rem(15.5),
});

globalStyle('[data-article] p', {
  color: theme.colors.text,
  fontSize: rem(15.5),
  fontWeight: 400,
  lineHeight: '180%',
  paddingBottom: rem(18),
});

globalStyle('[data-article] strong', {
  fontWeight: 600,
});

globalStyle('[data-article] small', {
  color: theme.colors.textSecondary,
  fontSize: rem(12.5),
});

globalStyle('[data-article] small > code', {
  paddingBlock: rem(1.5),
  paddingInline: rem(3),
  color: theme.colors.textSecondary,
  fontFamily: theme.fonts.mono,
  fontSize: rem(11),
  backgroundColor: theme.colors.cardBackgroundHover,
  borderRadius: rem(4),
});

globalStyle('[data-article] p > img', {
  maxWidth: '100%',
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(10),
  objectFit: 'cover',
  overflow: 'hidden',
  userSelect: 'none',
});

globalStyle('[data-article] [class^=blockquote-] > p', {
  padding: 0,
  margin: 0,
});

globalStyle('[data-article] p > code', {
  paddingBlock: rem(2),
  paddingInline: rem(4),
  fontFamily: theme.fonts.mono,
  fontSize: rem(14.5),
  lineHeight: 1.3,
  backgroundColor: theme.colors.cardBackgroundHover,
  borderRadius: rem(4),
});

globalStyle('[data-article] video', {
  maxWidth: '100%',
  marginBottom: rem(18),
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(10),
  overflow: 'hidden',
  transform: 'translateZ(0)',
});

globalStyle('article hr', {
  width: '100%',
  height: rem(2),
  marginBlock: rem(32),
  border: 0,
  borderRadius: rem(2),
  backgroundColor: theme.colors.line,
});

// code-highlighting
globalStyle('[data-rehype-pretty-code-fragment]', {
  marginBottom: rem(18),
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(10),
  overflow: 'hidden',
});

globalStyle('[data-theme="light"] [data-rehype-pretty-code-fragment] > pre', {
  color: `${theme.colors.gray950} !important`,
  backgroundColor: 'rgba(250, 250, 250) !important',
});

globalStyle('[data-theme="light"] [data-rehype-pretty-code-fragment] > pre.github-dark-dimmed', {
  display: 'none',
});

globalStyle('[data-theme="dark"] [data-rehype-pretty-code-fragment] > pre', {
  color: `${theme.colors.gray0} !important`,
  backgroundColor: `${theme.colors.gray950} !important`,
});

globalStyle('[data-theme="dark"] [data-rehype-pretty-code-fragment] > pre.github-light', {
  display: 'none',
});

globalStyle('[data-rehype-pretty-code-fragment] > pre', {
  overflowX: 'auto',
});

globalStyle('[data-rehype-pretty-code-fragment] > pre > code', {
  width: 'fit-content',
  padding: rem(8),
  fontFamily: theme.fonts.mono,
  fontSize: rem(14),
});

globalStyle('[data-line-numbers]', {
  counterReset: 'line',
});

globalStyle('code[data-line-numbers] > [data-line]::before', {
  counterIncrement: 'line',
  content: 'counter(line)',
  display: 'inline-block',
  width: rem(12),
  marginRight: rem(20),
  color: theme.colors.textSecondary,
  textAlign: 'right',
  opacity: 0.8,
});

globalStyle('code[data-line-numbers-max-digits="2"] > [data-line]::before', {
  width: rem(20),
});

globalStyle('code[data-line-numbers-max-digits="3"] > [data-line]::before', {
  width: rem(28),
});

globalStyle('code[data-line-numbers-max-digits="4"] > [data-line]::before', {
  width: rem(36),
});

globalStyle(
  '[data-rehype-pretty-code-fragment], code[data-theme*=" "], code[data-theme*=" "] span',
  {
    vars: {
      '--shiki-light': theme.colors.gray950,
      '--shiki-light-bg': 'rgba(250, 250, 250)',
      '--shiki-dark': theme.colors.gray0,
      '--shiki-dark-bg': theme.colors.gray950,
    },
    color: 'var(--shiki-light)',
    backgroundColor: 'var(--shiki-light-bg)',
  },
);

globalStyle(
  '[data-theme="dark"] [data-rehype-pretty-code-fragment], [data-theme="dark"] code[data-theme*=" "], [data-theme="dark"] code[data-theme*=" "] span',
  {
    color: 'var(--shiki-dark)',
    backgroundColor: 'var(--shiki-dark-bg)',
  },
);
