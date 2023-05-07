import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root{
        --main-color: #000b2c;
        --dark-color: #000514;
        --light-color: #D7E5EE;

        --grey0: #F2F2F2;
        --grey1: #A6A6A6;
        --grey2: #595959;
        --grey3: #262626;
        --grey4: #0D0D0D;

        --greyT: #0d0d0dc0;
    }

    *{
        margin: 0;
        padding: 0;
        border: none;
        list-style: none;
        background: none;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Raleway', sans-serif;
        color: #F2F2F2;
        scroll-behavior: smooth;
    }

`;
