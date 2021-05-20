import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      body {
        background-color: white;
        color: black;
        font-size: 16px;
        font-family: sans-serif;
        margin: 0;
      }
      * {
        box-sizing: border-box;
      }
      *::selection {
        background: #c60dff;
        color: white;
      }
`;

export default GlobalStyle;
