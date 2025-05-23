import { rem } from '@haklee/style';
import { globalStyle } from '@vanilla-extract/css';

import { darkMode, lightMode, theme } from '@/styles/theme.css';

globalStyle('[data-rehype-pretty-code-figure]', {
  marginBottom: rem(18),
  border: `${rem(1)} solid ${theme.color.cardBorder}`,
  borderRadius: rem(10),
  overflow: 'hidden',
});

globalStyle(`${lightMode} [data-rehype-pretty-code-figure] > pre`, {
  color: `${theme.color.gray950} !important`,
  backgroundColor: 'rgba(250, 250, 250) !important',
});

globalStyle(`${lightMode} [data-rehype-pretty-code-figure] > pre.github-dark-dimmed`, {
  display: 'none',
});

globalStyle(`${darkMode} [data-rehype-pretty-code-figure] > pre`, {
  color: `${theme.color.white} !important`,
  backgroundColor: `${theme.color.gray950} !important`,
});

globalStyle(`${darkMode} [data-rehype-pretty-code-figure] > pre.github-light`, {
  display: 'none',
});

globalStyle('[data-rehype-pretty-code-figure] > pre', {
  overflowX: 'auto',
});

globalStyle('[data-rehype-pretty-code-figure] > pre > code', {
  width: 'fit-content',
  padding: rem(8),
  fontFamily: theme.fontFamily.mono,
  fontSize: theme.fontSize.sm,
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
  color: theme.color.textSecondary,
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

globalStyle('[data-rehype-pretty-code-figure], code[data-theme*=" "], code[data-theme*=" "] span', {
  vars: {
    '--shiki-light': theme.color.gray950,
    '--shiki-light-bg': 'rgba(250, 250, 250)',
    '--shiki-dark': theme.color.white,
    '--shiki-dark-bg': theme.color.gray950,
  },
  color: 'var(--shiki-light)',
  backgroundColor: 'var(--shiki-light-bg)',
});

globalStyle(
  `${darkMode} [data-rehype-pretty-code-figure], ${darkMode} code[data-theme*=" "], ${darkMode} code[data-theme*=" "] span`,
  {
    color: 'var(--shiki-dark)',
    backgroundColor: 'var(--shiki-dark-bg)',
  },
);
