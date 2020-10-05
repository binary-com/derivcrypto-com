import { createGlobalStyle } from 'styled-components'
import reset from './reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        font-family: 'IBM Plex Sans', sans-serif;

        &, &::before, &::after {
            box-sizing: border-box;
        }
    }
    html {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.text_primary};
    }
    body {
        font-family: 'IBM Plex Sans', sans-serif;
        line-height: 1.5;
        letter-spacing: 0;
        background: ${({ theme }) => theme.colors.background_default};
    }
`
