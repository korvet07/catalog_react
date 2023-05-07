import { createGlobalStyle } from "styled-components";
import montserratBoldWoff from "/src/assets/fonts/montserrat-bold.woff";
import montserratBoldWoff2 from "/src/assets/fonts/montserrat-bold.woff2";
import montserratExtralightWoff from "/src/assets/fonts/montserrat-extralight.woff";
import montserratExtralightWoff2 from "/src/assets/fonts/montserrat-extralight.woff2";
import montserratRegularWoff from "/src/assets/fonts/montserrat-regular.woff";
import montserratRegularWoff2 from "/src/assets/fonts/montserrat-regular.woff2";


export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src:  url(${montserratBoldWoff2}) format("woff2"),
          url(${montserratBoldWoff}) format("woff");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:  url(${montserratRegularWoff2}) format("woff2"),
          url(${montserratRegularWoff}) format("woff");
  }

  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src:  url(${montserratExtralightWoff2}) format("woff2"),
          url(${montserratExtralightWoff}) format("woff");
  }

  body,
  html {
    margin: 0;
  }

  body {
    display: grid;
    grid-template-rows: 1fr;
    position: relative;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    font-family: "Montserrat", "Arial", sans-serif;
    color: #333333;
  }

* {
  transition: all 0.1s ease-out;
  box-sizing: border-box;
}
.toast-message {
    color: black;
  }
`;
