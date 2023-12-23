import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        margin-left: calc(100vw - 100%);
        height: 100%;
    }

    body {
        position: relative;
        margin: 0;
        min-height: 100%;
        font-family: ${(props) => props.theme.fontFamily};
        font-size: ${(props) => props.theme.fontSizeDefault};
        line-height: 150%;
        font-weight: 400;
        color: ${(props) => props.theme.textColor};
      }
`;
