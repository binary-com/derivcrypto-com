import React from 'react'
import { ThemeProvider } from 'styled-components'
import { WrapPagesWithLocaleContext } from 'components/localization'
import { StateProvider } from 'store'
import { theme, MediaContextProvider } from 'themes'

export const wrapRootElement = ({ element }) => {
    return (
        <StateProvider>
            <ThemeProvider theme={theme}>
                <MediaContextProvider>{element}</MediaContextProvider>
            </ThemeProvider>
        </StateProvider>
    )
}

export const wrapPageElement = WrapPagesWithLocaleContext
