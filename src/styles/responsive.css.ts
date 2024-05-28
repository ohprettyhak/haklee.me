import { StyleRule } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';

type BP = 'mobile' | 'tablet' | 'desktop';

export const breakpoints = {
  mobile: rem(480),
  tablet: rem(768),
  desktop: rem(1024),
};

export const breakpoint = (rules: Partial<Record<BP, StyleRule>>) => {
  const mediaQueries = Object.entries(rules).reduce(
    (acc, [bp, rule]) => {
      const minWidth = breakpoints[bp as BP];
      acc[`screen and (min-width: ${minWidth})`] = rule;
      return acc;
    },
    {} as Record<string, StyleRule>,
  );

  return {
    '@media': mediaQueries,
  };
};
