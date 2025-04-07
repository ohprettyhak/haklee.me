import { globalStyle } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/theme.css';

globalStyle(`.craft-section`, {
  ...theme.layouts.column,
  paddingInline: theme.sizes.appSpace,
});

globalStyle(`.craft-section > h1`, {
  marginTop: rem(36),
  color: theme.colors.text,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.xl,
  fontWeight: 600,
});

globalStyle(`.craft-section > p`, {
  marginTop: rem(8),
  color: theme.colors.textSecondary,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.sm,
});
