import { createGlobalStyle } from "styled-components";
import calibri_italic from "../assets/fonts/calibri-bold-italic.ttf";
import calibri_bold from "../assets/fonts/calibri-bold.ttf";
import calibri_bold_italic from "../assets/fonts/calibri-bold-italic.ttf";
import calibri_regular from "../assets/fonts/calibri-regular.ttf";

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::selection {
    background-color: #d2d2d2;
  }

  @font-face {
    font-family: 'Calibri';
    src: url(${calibri_italic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Calibri';
    src: url(${calibri_bold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibri Bold Italic';
    src: url(${calibri_bold_italic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Calibri';
    src: url(${calibri_regular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;