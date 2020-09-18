import React from 'react'
import { ThemeProvider } from 'styled-components'
import { WrapPagesWithLocaleContext } from 'components/localization'
import { StateProvider } from 'store'
import { GlobalStyle, theme } from 'themes'
import { isBrowser } from 'common/utility'
import { isProduction } from 'websocket/config'
import { LocalStore } from 'common/storage'
import { isMobile } from 'common/os-detect'
import TrafficSource from 'common/traffic-source'

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

export const wrapPageElement = WrapPagesWithLocaleContext

export const onInitialClientRender = () => {
    // Enable translation
    // Check if not production and match ach or ach/
    if (isBrowser()) {
        const match_ach = window.location.pathname.match(/^(\/ach\/)|\/ach$/)

        if (match_ach) {
            if (!isProduction()) LocalStore.set('i18n', 'ach')
        }

        const i18n = LocalStore.get('i18n')

        if (!isProduction() && i18n && i18n.match('ach')) {
            const jipt = document.createElement('script')
            jipt.type = 'text/javascript'
            jipt.text = `
                var _jipt = []; _jipt.push(['project', 'deriv-crypto']);
                var crowdin = document.createElement("script");
                crowdin.setAttribute('src', '//cdn.crowdin.com/jipt/jipt.js');
                document.head.appendChild(crowdin);
            `
            document.head.appendChild(jipt)
        }
    }
    // Configure traffic source
    TrafficSource.init()

    if (!LocalStore.get('signup_device')) {
        LocalStore.set('signup_device', isMobile() ? 'mobile' : 'desktop')
    }
}
