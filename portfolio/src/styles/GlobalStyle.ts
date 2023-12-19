import { createGlobalStyle } from "styled-components";
import { thema } from "./thema";


export const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        font-weight: normal;
        box-sizing: border-box;

        background-color: ${thema.color.grayBold};
    }
`