import { rem } from './pxto';

const fontFamily = {
  mono: `"Courier New", Courier, "Pretendard Variable", monospace`,
  sans: `"Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const fontSize = {
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

const layout = {
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

const zIndex = {
  behind: '-1',
  overlay: '100',
  header: '150',
  modal: '200',
  modalContent: '250',
};

const color = {
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
};

export const theme = {
  fontFamily,
  fontSize,
  layout,
  zIndex,
  color,
};
