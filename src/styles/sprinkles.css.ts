import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '@/styles/responsive.css';
import {
  colors,
  fontSizes,
  fontWeights,
  layouts,
  spaces,
} from '@/styles/styles.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
    desktop: { '@media': `screen and (min-width: ${breakpoints.desktop})` },
  },
  defaultCondition: 'mobile',
  properties: {
    // Layout
    display: ['none', 'flex', 'block', 'inline'],
    flex: [0, 1],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    width: ['fit-content', '100%'],

    paddingTop: spaces,
    paddingBottom: spaces,
    paddingLeft: spaces,
    paddingRight: spaces,

    marginTop: spaces,
    marginBottom: spaces,
    marginLeft: spaces,
    marginRight: spaces,

    layout: {
      center: layouts.center,
      centerX: layouts.centerX,
      centerY: layouts.centerY,
      rowBetween: layouts.rowBetween,
      column: layouts.column,
      columnCenterX: layouts.columnCenterX,
      columnCenterY: layouts.columnCenterY,
    },

    // Typography
    fontSize: fontSizes,
    fontWeight: fontWeights,
    textDecoration: ['none', 'underline'],

    // Spacing
    gap: spaces,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingInline: ['paddingLeft', 'paddingRight'],
    paddingBlock: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginInline: ['marginLeft', 'marginRight'],
    marginBlock: ['marginTop', 'marginBottom'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    light: {},
  },
  defaultCondition: 'light',
  properties: {
    color: colors,
    background: colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
