import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

import { rem } from './pxto';

const sizes = {
  app: rem(760),
  appSpace: rem(24),
};

const fonts = {
  mono: `"Courier New", Courier, var(--font-pretendard), "Pretendard Variable", monospace`,
  sans: `var(--font-pretendard), "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const layouts = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const zIndices = {
  behind: '-1',
  overlay: '100',
  header: '150',
  modal: '200',
  modalContent: '250',
};

const modeColors = createThemeContract({
  background: '--hakui-background',
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

  hufs: '--hakui-hufs',
});

const colors = {
  gray0: '#FFFFFF',
  gray50: '#F6F6F6',
  gray100: '#E7E7E7',
  gray200: '#D1D1D1',
  gray300: '#B0B0B0',
  gray400: '#888888',
  gray500: '#6D6D6D',
  gray600: '#5D5D5D',
  gray700: '#4F4F4F',
  gray800: '#454545',
  gray900: '#3D3D3D',
  gray950: '#1A1A1A',

  blue50: '#F2F9FD',
  blue100: '#E4F1FA',
  blue200: '#C4E2F3',
  blue300: '#90CBE9',
  blue400: '#55B1DC',
  blue500: '#2E97C9',
  blue600: '#1F79AA',
  blue700: '#1A618A',
  blue800: '#195273',
  blue900: '#1A4560',
  blue950: '#122C3F',

  ...modeColors,
};

export const lightModeColors = createTheme(modeColors, {
  background: colors.gray0,
  menuBorder: 'rgba(215, 215, 215, 0.3)',
  menuBackground: 'rgba(225, 225, 225, 0.3)',
  menuActiveBackground: 'rgba(190, 190, 190, 0.6)',

  tabBehind: 'rgba(28, 27, 31, 0.03)',

  cardBorder: 'rgba(28, 27, 31, 0.04)',
  cardBackground: 'rgba(28, 27, 31, 0.01)',
  cardBorderHover: 'rgba(28, 27, 31, 0.15 )',
  cardBackgroundHover: 'rgba(28, 27, 31, 0.03)',

  text: colors.gray950,
  textSecondary: colors.gray700,
  textTertiary: colors.gray500,
  border: colors.gray100,
  line: colors.gray50,

  hufs: '#002B49',
});

export const darkModeColors = createTheme(modeColors, {
  background: 'rgba(10, 10, 10)',
  menuBorder: 'rgba(36, 36, 36, 0.4)',
  menuBackground: 'rgba(26, 26, 26, 0.5)',
  menuActiveBackground: 'rgba(36, 36, 36, 0.8)',

  tabBehind: 'rgba(36, 36, 36, 0.8)',

  cardBorder: 'rgba(36, 36, 36, 0.6)',
  cardBackground: 'rgba(26, 26, 26, 0.3)',
  cardBorderHover: 'rgba(46, 46, 46, 1)',
  cardBackgroundHover: 'rgba(46, 46, 46, 0.5)',

  text: colors.gray0,
  textSecondary: colors.gray400,
  textTertiary: colors.gray200,
  border: colors.gray800,
  line: colors.gray800,

  hufs: colors.gray0,
});

export const theme = createGlobalTheme(':root', {
  colors,
  fonts,
  sizes,
  layouts,
  zIndices,
});
