import React from 'react'
import { ThemeProvider } from 'styled-components'
import SnackbarProvider from 'react-simple-snackbar'
import { WrapPagesWithLocaleContext } from 'components/localization'
// import { StateProvider } from 'store'
import { theme, MediaContextProvider } from 'themes'
import { isBrowser } from 'common/utility'
import { isProduction, isStaging } from 'websocket/config'
import { LocalStore } from 'common/storage'
import { isMobile } from 'common/os-detect'
import TrafficSource from 'common/traffic-source'

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <MediaContextProvider>
                <SnackbarProvider>{element}</SnackbarProvider>
            </MediaContextProvider>
        </ThemeProvider>
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

export const onClientEntry = () => {
    // Add GTM script
    if (isProduction() || isStaging()) {
        const gtm = document.createElement('script')
        gtm.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NF7884S'
        gtm.id = 'gtm-container'
        document.body.appendChild(gtm)

        const datalayer = document.createElement('script')
        datalayer.text = `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NF7884S');
            `

        setTimeout(() => {
            document.body.appendChild(datalayer)
        }, 2000)
    }
}
