import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media (max-width: 767.98px) {
      font-size: 87.5%; // 15px
    }

    @media (max-width: 1024px) {
      font-size: 93.75%; // 14px
    }
  }
  
  body {
    background: ${({ theme }) => theme.palette.white._50.hex()};
    color: ${({ theme }) => theme.palette.white.main.hex()};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;