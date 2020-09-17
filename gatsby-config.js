const language_config = require(`./i18n-config.js`)

module.exports = {
    siteMetadata: {
        title: 'Derivcrypto',
        description:
            'Trade forex, commodities, cryptocurrencies, synthetic and stock indices - commission-free and directly from your crypto wallets.',
        author: 'Deriv',
        siteUrl: 'https://derivcrypto.com',
    },
    plugins: [
        'gatsby-plugin-stylelint',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-svgr',
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: `IBM Plex Sans`,
                            variants: [`300`, `400`, `500`, `700`],
                            subsets: [`cyrillic`, `cyrillic-ext`, `latin-ext`, `vietnamese`],
                        },
                    ],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [
                    {
                        userAgent: '*',
                        allow: '/',
                        disallow: ['/404/', '/ach/'],
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-NF7884S',
                includeInDevelopment: false,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Derivcrypto',
                short_name: 'Derivcrypto',
                description:
                    'Trade forex, commodities, cryptocurrencies, synthetic and stock indices - commission-free and directly from your crypto wallets.',
                start_url: '/',
                background_color: '#0e0e0e',
                theme_color: '#ff444f',
                display: 'standalone',
                icon: './favicons/favicon-512x512.png',
            },
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                exclude: [
                    '/404',
                    '/**/404.html',
                    '/**/404',
                    '/check-email',
                    '/**/check-email',
                    '/reset-password',
                    '/**/reset-password',
                    '/ach',
                    '/ach/**',
                    '/amp',
                    '/amp/**',
                    '/**/amp',
                    '/**/amp/**',
                    '/interim',
                    '/interim/**',
                    '/**/interim',
                    '/**/interim/**',
                    '/homepage',
                    '/homepage/**',
                    '/**/homepage',
                    '/**/homepage/**',
                ],
                serialize: ({ site, allSitePage }) =>
                    allSitePage.edges.map(edge => {
                        const path = edge.node.path
                        let priority = 0.7
                        const languages = Object.keys(language_config)
                        if (path === '/') {
                            priority = 1.0
                        }

                        const path_array = path.split('/')
                        const current_lang = path_array[1]
                        const check_lang = current_lang.replace('-', '_')
                        let current_page = path

                        if (languages.includes(check_lang)) {
                            path_array.splice(1, 1)
                            current_page = path_array.join('/')
                        }

                        languages.push('x-default')
                        languages.splice(languages.indexOf('ach'), 1)
                        const links = languages.map(locale => {
                            if (locale !== 'ach' && locale) {
                                const replaced_locale = locale.replace('_', '-')

                                const is_default = locale === 'en' || locale === 'x-default'
                                const href_locale = is_default ? '' : `/${replaced_locale}`
                                const href = `${site.siteMetadata.siteUrl}${href_locale}${current_page}`

                                return { lang: replaced_locale, url: href }
                            }
                        })

                        return {
                            url: site.siteMetadata.siteUrl + edge.node.path,
                            changefreq: `monthly`,
                            priority,
                            links,
                        }
                    }),
            },
        },
    ],
}
