import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StateProvider } from 'store'
import { GlobalStyle, theme } from 'themes'

export const wrapRootElement = ({ element }) => {
    return (
        <StateProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {element}
            </ThemeProvider>
        </StateProvider>
    )
}
