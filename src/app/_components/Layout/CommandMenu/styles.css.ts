import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const modal = style({
  overflow: 'hidden',
});

globalStyle('[cmdk-root]', {
  position: 'relative',
  width: '100%',
  padding: rem(8),
  transition: 'height 0.3s ease',
  overflow: 'hidden',
  backgroundColor: 'transparent',
});

globalStyle('[cmdk-input]', {
  width: '100%',
  padding: `${rem(8)} ${rem(8)} ${rem(16)}`,
  marginBottom: rem(16),
  color: theme.colors.text,
  fontSize: theme.fontSizes.md,
  border: 'none',
  borderBottom: `${rem(1)} solid ${theme.colors.commandTriggerBorder}`,
  borderRadius: 0,
  outline: 'none',
  backgroundColor: 'transparent',
});

globalStyle('[cmdk-list]', {
  height: `min(${rem(330)}, var(--cmdk-list-height))`,
  maxHeight: rem(400),
  overflow: 'auto',
  overscrollBehavior: 'contain',
  transition: '0.1s ease',
  transitionProperty: 'height',
  scrollPaddingBlockStart: rem(8),
  scrollPaddingBlockEnd: rem(8),
});

globalStyle('[cmdk-empty]', {
  ...theme.layouts.center,
  height: rem(48),
  color: theme.colors.textTertiary,
  fontSize: theme.fontSizes.sm,
  whiteSpace: 'pre-wrap',
});

globalStyle('[cmdk-group-heading]', {
  ...theme.layouts.centerY,
  paddingInline: rem(8),
  marginBottom: rem(8),
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.xs,
  userSelect: 'none',
});

globalStyle('[cmdk-item]', {
  ...theme.layouts.centerY,
  height: rem(38),
  paddingInline: rem(16),
  color: theme.colors.text,
  fontSize: theme.fontSizes.sm,
  cursor: 'pointer',
  contentVisibility: 'auto',
  borderRadius: rem(8),
  willChange: 'background,color',
  transition: 'all 0.15s ease',
  transitionProperty: 'none',
  gap: rem(8),
});

globalStyle('[cmdk-item][data-selected=true]', {
  backgroundColor: theme.colors.commandItemPressed,
});

globalStyle('[cmdk-item][data-disabled=true]', {
  cursor: 'not-allowed',
});

globalStyle(':not([hidden])+[cmdk-group]', {
  marginTop: rem(8),
});

globalStyle('[cmdk-separator]', {
  width: '100%',
  height: rem(1),
  marginBlock: rem(4),
  backgroundColor: theme.colors.commandTriggerBorder,
});
