import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
	  font-family: ${({ theme }) => theme.fontFamily.roboto};
    font-size: 10px; // 1rem === 10px
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    margin: 0;
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize.fontLg};
    font-weight: 300;
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.fontMd};
    font-weight: 300;
  }
  p {
    font-family: ${({ theme }) => theme.fontFamily.roboto};
    font-size: ${({ theme }) => theme.fontSize.fontReg};
    font-weight: 200;
  }
  .strong {
    font-weight: 500;
  }

  .section-header {
    font-size: $font-reg;
    font-weight: 300;
  }

`;

export default GlobalStyles;
