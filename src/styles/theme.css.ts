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

const fontSizes = {
  xxxl: rem(28),
  xxl: rem(24),
  xl: rem(20),
  lg: rem(18),
  md: rem(16),
  base: rem(15),
  sm: rem(14),
  xs: rem(12),
  xxs: rem(10),
  xxxs: rem(8),
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

  selection: '--hakui-selection',
  toc: '--hakui-toc',

  commandTriggerBackground: '--hakui-command-menu-background',
  commandTriggerBorder: '--hakui-command-menu-border',
  commandTriggerInner: '--hakui-command-menu-inner',
  commandItemPressed: '--hakui-command-item-pressed',

  modalOverlay: '--hakui-modal-overlay',
  modalBackground: '--hakui-modal-background',
  modalBorder: '--hakui-modal-border',

  craftBorder: '--hakui-craft-border',
});

const colors = {
  white: '#FFFFFF',
  whiteAlpha05: 'rgba(255, 255, 255, 0.05)',
  whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
  whiteAlpha20: 'rgba(255, 255, 255, 0.2)',
  whiteAlpha30: 'rgba(255, 255, 255, 0.3)',
  whiteAlpha40: 'rgba(255, 255, 255, 0.4)',
  whiteAlpha50: 'rgba(255, 255, 255, 0.5)',
  whiteAlpha60: 'rgba(255, 255, 255, 0.6)',
  whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
  whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
  whiteAlpha90: 'rgba(255, 255, 255, 0.9)',

  blackAlpha05: 'rgba(32, 35, 37, 0.05)',
  blackAlpha10: 'rgba(32, 35, 37, 0.1)',
  blackAlpha20: 'rgba(32, 35, 37, 0.2)',
  blackAlpha30: 'rgba(32, 35, 37, 0.3)',
  blackAlpha40: 'rgba(32, 35, 37, 0.4)',
  blackAlpha50: 'rgba(32, 35, 37, 0.5)',
  blackAlpha60: 'rgba(32, 35, 37, 0.6)',
  blackAlpha70: 'rgba(32, 35, 37, 0.7)',
  blackAlpha80: 'rgba(32, 35, 37, 0.8)',
  blackAlpha90: 'rgba(32, 35, 37, 0.9)',

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

  ...modeColors,
};

export const lightModeColors = createTheme(modeColors, {
  background: colors.white,
  menuBorder: 'rgba(215, 215, 215, 0.3)',
  menuBackground: 'rgba(225, 225, 225, 0.3)',
  menuActiveBackground: 'rgba(190, 190, 190, 0.6)',

  tabBehind: 'rgba(28, 27, 31, 0.03)',

  cardBorder: 'rgba(28, 27, 31, 0.04)',
  cardBackground: 'rgba(28, 27, 31, 0.01)',
  cardBorderHover: 'rgba(28, 27, 31, 0.15)',
  cardBackgroundHover: 'rgba(28, 27, 31, 0.03)',

  text: colors.gray950,
  textSecondary: colors.gray700,
  textTertiary: colors.gray500,
  border: colors.gray100,
  line: colors.gray50,

  hufs: '#002B49',

  selection: 'rgba(0, 0, 0, 0.15)',
  toc: colors.blackAlpha40,

  commandTriggerBackground: colors.white,
  commandTriggerBorder: colors.gray50,
  commandTriggerInner: colors.gray50,
  commandItemPressed: 'rgba(150, 150, 150, 0.2)',

  modalOverlay: 'rgba(255, 255, 255, 0.7)',
  modalBackground: 'rgba(255, 255, 255, 0.9)',
  modalBorder: colors.gray100,

  craftBorder: 'rgba(231, 231, 231, 0.5)',
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

  text: 'rgba(255, 255, 255, 0.9)',
  textSecondary: colors.gray400,
  textTertiary: colors.gray200,
  border: colors.gray800,
  line: colors.gray800,

  hufs: colors.white,

  selection: 'rgba(255, 255, 255, 0.15)',
  toc: colors.whiteAlpha40,

  commandTriggerBackground: 'rgba(16, 16, 16)',
  commandTriggerBorder: 'rgba(61, 61, 61, 0.5)',
  commandTriggerInner: 'rgba(61, 61, 61, 0.4)',
  commandItemPressed: 'rgba(61, 61, 61, 0.3)',

  modalOverlay: 'rgba(0, 0, 0, 0.7)',
  modalBackground: 'rgba(10, 10, 10, 0.95)',
  modalBorder: colors.gray950,

  craftBorder: colors.gray950,
});

export const theme = createGlobalTheme(':root', {
  colors,
  fonts,
  fontSizes,
  sizes,
  layouts,
  zIndices,
});
