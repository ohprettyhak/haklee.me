import { rem, globalTheme } from '@haklee/style';
import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

const size = {
  app: rem(760),
  appSpace: rem(24),
};

const modeColor = createThemeContract({
  background: '--hakui-background',
  selection: '--hakui-selection',

  menuBorder: '--hakui-menu-border',
  menuBackground: '--hakui-menu-background',
  menuActiveBackground: '--hakui-menu-active-background',

  cardBorder: '--hakui-card-border',
  cardBackground: '--hakui-card-background',
  cardBorderHover: '--hakui-card-border-hover',
  cardBackgroundHover: '--hakui-card-background-hover',

  tabBehind: '--hakui-tab-behind',

  text: '--hakui-text',
  textSecondary: '--hakui-text-secondary',
  textTertiary: '--hakui-text-tertiary',
  border: '--hakui-border',
  line: '--hakui-line',

  toc: '--hakui-toc',
  craftBorder: '--hakui-craft-border',

  brand: {
    hufs: '--hakui-hufs',
  },
});

export const color = {
  ...globalTheme.color,
  ...modeColor,
};

export const lightMode = createTheme(modeColor, {
  background: color.white,
  selection: 'rgba(0, 0, 0, 0.15)',

  menuBorder: 'rgba(215, 215, 215, 0.3)',
  menuBackground: 'rgba(225, 225, 225, 0.3)',
  menuActiveBackground: 'rgba(190, 190, 190, 0.6)',

  tabBehind: 'rgba(28, 27, 31, 0.03)',

  cardBorder: 'rgba(28, 27, 31, 0.04)',
  cardBackground: 'rgba(28, 27, 31, 0.01)',
  cardBorderHover: 'rgba(28, 27, 31, 0.15)',
  cardBackgroundHover: 'rgba(28, 27, 31, 0.03)',

  text: color.gray950,
  textSecondary: color.gray700,
  textTertiary: color.gray500,
  border: color.gray100,
  line: color.gray50,

  toc: color.blackAlpha40,
  craftBorder: 'rgba(231, 231, 231, 0.5)',

  brand: {
    hufs: '#002B49',
  },
});

export const darkMode = createTheme(modeColor, {
  background: 'rgba(10, 10, 10)',
  selection: 'rgba(255, 255, 255, 0.15)',

  menuBorder: 'rgba(36, 36, 36, 0.4)',
  menuBackground: 'rgba(26, 26, 26, 0.5)',
  menuActiveBackground: 'rgba(36, 36, 36, 0.8)',

  tabBehind: 'rgba(36, 36, 36, 0.8)',

  cardBorder: 'rgba(36, 36, 36, 0.6)',
  cardBackground: 'rgba(26, 26, 26, 0.3)',
  cardBorderHover: 'rgba(46, 46, 46, 1)',
  cardBackgroundHover: 'rgba(46, 46, 46, 0.5)',

  text: 'rgba(255, 255, 255, 0.9)',
  textSecondary: color.gray400,
  textTertiary: color.gray200,

  border: color.gray800,
  line: color.gray800,

  toc: color.whiteAlpha40,
  craftBorder: color.gray950,

  brand: {
    hufs: color.white,
  },
});

export const theme = createGlobalTheme(':root', {
  fontFamily: globalTheme.fontFamily,
  fontSize: globalTheme.fontSize,
  layout: globalTheme.layout,
  zIndex: globalTheme.zIndex,
  size,
  color,
});
