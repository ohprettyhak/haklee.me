import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const button = style({
  ...theme.layouts.centerY,
  width: 'fit-content',
  paddingBlock: rem(6),
  paddingInline: rem(10),
  color: theme.colors.text,
  fontSize: theme.fontSizes.sm,
  fontWeight: 500,
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(8),
  backgroundColor: theme.colors.cardBackground,
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  gap: rem(4),
  userSelect: 'none',

  ':hover': { backgroundColor: theme.colors.cardBackgroundHover },
});
