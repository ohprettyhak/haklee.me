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
  overlay: '100',
  header: '150',
  modal: '200',
};

const modeColors = createThemeContract({
  background: '--hakui-background',
  menuBackground: '--hakui-menu-background',
  menuActiveBackground: '--hakui-menu-active-background',

  text: '--hakui-text',
  border: '--hakui-border',
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
  menuBackground: 'rgba(28, 27, 31, 0.03)',
  menuActiveBackground: 'rgba(28, 27, 31, 0.1)',

  text: colors.gray950,
  border: colors.gray100,
});

export const darkModeColors = createTheme(modeColors, {
  background: 'rgba(10, 10, 10)',
  menuBackground: 'rgba(26, 26, 26, 0.5)',
  menuActiveBackground: 'rgba(36, 36, 36, 0.8)',

  text: colors.gray0,
  border: colors.gray800,
});

export const theme = createGlobalTheme(':root', {
  colors,
  fonts,
  sizes,
  layouts,
  zIndices,
});
