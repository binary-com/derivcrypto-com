import { createGlobalStyle } from 'styled-components'
import reset from './reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        box-sizing: border-box;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.color.text_primary};
    }
    body {
        line-height: 1.5;
        letter-spacing: 0;
        background: ${({ theme }) => theme.color.background_default};
    }
`
