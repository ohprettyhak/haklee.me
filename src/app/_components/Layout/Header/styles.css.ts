import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';
import { breakpoint } from '@/styles/responsive.css';

export const root = style({
  ...theme.layouts.rowBetween,
  width: '100%',
  maxWidth: theme.sizes.app,
  marginTop: theme.sizes.appSpace,
  paddingInline: theme.sizes.appSpace,
  zIndex: theme.zIndices.header,
});

export const branding = style({
  ...theme.layouts.center,
  position: 'relative',
  width: rem(52),
  height: rem(52),
  border: `${rem(1)} solid ${theme.colors.gray50}`,
  borderRadius: '50%',
  backgroundColor: 'rgba(250, 250, 250, 1)',
});

export const sunglasses = style({
  position: 'absolute',
  top: 0,
  left: rem(10),
});

export const menu = style({
  ...theme.layouts.centerY,
  gap: rem(16),
});

export const cmdk = style({
  ...theme.layouts.rowBetween,
  paddingBlock: rem(6),
  paddingInline: rem(10),
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.xs,
  lineHeight: '100%',
  width: rem(128),
  border: `${rem(1)} solid ${theme.colors.commandTriggerBorder}`,
  borderRadius: rem(8),
  backgroundColor: theme.colors.commandTriggerBackground,
  opacity: 1,
  transition: 'opacity 0.3s, border-color 0.3s, background-color 0.3s',

  ':hover': { opacity: 0.7 },
  ...breakpoint({ tablet: { width: rem(156) } }),
});

export const kbd = style({
  paddingBlock: rem(3),
  paddingInline: rem(4),
  fontSize: theme.fontSizes.xs,
  border: `${rem(1)} solid ${theme.colors.commandTriggerInner}`,
  borderRadius: rem(6),
  backgroundColor: theme.colors.commandTriggerInner,
});
