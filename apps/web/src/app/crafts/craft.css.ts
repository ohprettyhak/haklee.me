import { rem } from '@haklee/style';
import { globalStyle } from '@vanilla-extract/css';

import { theme } from '@/styles';

globalStyle(`.craft-section`, {
  ...theme.layout.column,
  paddingInline: theme.size.appSpace,
});

globalStyle(`.craft-section > h1`, {
  marginTop: rem(36),
  color: theme.color.text,
  fontFamily: theme.fontFamily.mono,
  fontSize: theme.fontSize.xl,
  fontWeight: 600,
});

globalStyle(`.craft-section > p`, {
  marginTop: rem(8),
  color: theme.color.textSecondary,
  fontFamily: theme.fontFamily.mono,
  fontSize: theme.fontSize.sm,
});
