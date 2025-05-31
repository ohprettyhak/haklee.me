import { rem } from '@haklee/style';
import { style } from '@vanilla-extract/css';

import { theme } from '@/styles';

export const button = style({
  ...theme.layout.centerY,
  width: 'fit-content',
  paddingBlock: rem(6),
  paddingInline: rem(10),
  color: theme.color.text,
  fontSize: theme.fontSize.sm,
  fontWeight: 500,
  border: `${rem(1)} solid ${theme.color.cardBorder}`,
  borderRadius: rem(8),
  backgroundColor: theme.color.cardBackground,
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  gap: rem(4),
  userSelect: 'none',

  ':hover': { backgroundColor: theme.color.cardBackgroundHover },
});
