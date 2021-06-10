import 'styled-components';
import color from 'color';

// Para adicionar mais cores ao tema, acesse: https://material.io/design/color/the-color-system.html#tools-for-picking-colors

const theme = {
  spacing: {
    small: '10px',
    medium: '20px',
    large: '30px',
  },
  palette: {
    white: {
      main: color('#FFFFFF'),
      _50: color('#F0F2F5'),
    },
    red: {
      _500: color('#E52E4D'),
    },
    blue: {
      _500: color('#6933FF'),
      _600: color('#5429CC'),
    },
    gray: {
      _200: color('#969CB3'),
      _800: color('#363F5F'),
    },
  },
};

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
