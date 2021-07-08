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
      shape: color('#FFFFFF'),
      background: color('#F0F2F5'),
    },
    gray: {
      text_title: color('#363F5F'),
      text_body: color('#969CB3'),
    },
    red: {
      red: color('#E52E4D'),
    },
    blue: {
      blue: color('#5429CC'),
      blue_light: color('#6933FF'),
    },
  },
};

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}

export default theme;