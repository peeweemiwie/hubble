import { createGlobalStyle } from 'styled-components';
import { Color, FontFamily, FontSize } from '../variables';
const color = Color;
const fontFamily = FontFamily;
const fontSize = FontSize;

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
}
  html {
	  font-family: ${fontFamily.roboto};
    font-size: 10px; // 1rem === 10px
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3 {
    font-family: ${fontFamily.montserrat};
    margin: 0;
  }
  h1 {
    font-size: ${fontSize.fontLg};
    font-weight: 300;
  }
  h2 {
    font-size: ${fontSize.fontMd};
    font-weight: 300;
  }
  p {
    font-family: ${fontFamily.roboto};
    font-size: ${fontSize.fontReg};
    font-weight: 200;
  }
  .strong {
    font-weight: 500;
  }

  .section-header {
    font-size: ${fontSize.fontReg};
    font-weight: 300;
  }
`;

export default GlobalStyles;
