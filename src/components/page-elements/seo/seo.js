import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext, localize } from 'components/localization'
import language_config from 'components/localization/language-config'
import Logo from 'images/png/common/logo.png'

export const SEO = ({ description, title, no_index }) => {
    // add default hreflang x-default
    const languages = [...Object.keys(language_config), ...['x-default']]
    const queries =
        useStaticQuery(
            graphql`
                query {
                    site {
                        siteMetadata {
                            title
                            description
                            author
                            siteUrl
                        }
                    }
                }
            `,
        ) || {}

    const metaDescription = description || queries.site.siteMetadata.description
    const site_url = queries.site.siteMetadata.siteUrl
    const { locale: lang, pathname } = React.useContext(LocaleContext)
    const locale_pathname = pathname.charAt(0) === '/' ? pathname : `/${pathname}`

    let is_ach_page = false
    let current_page = ''

    if (locale_pathname) {
        const path_array = locale_pathname.split('/')
        const current_lang = path_array[1]
        const check_lang = current_lang.replace('-', '_')
        current_page = locale_pathname

        if (languages.includes(check_lang)) {
            path_array.splice(1, 1)
            current_page = path_array.join('/')
        }
        if (current_lang === 'ach') is_ach_page = true
    }

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            defer={false}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content: localize(
                        'digital options, forex, forex trading, online trading, financial trading, digitals trading, index trading, trading indices, forex trades, trading commodities, digital options strategy, binary broker, binary bet, digital options trading platform, binary strategy, finance, investment, trading',
                    ),
                },
                {
                    name: 'google',
                    content: 'notranslate',
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:site_name',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    property: 'og:locale',
                    content: lang,
                },
                {
                    property: 'og:image',
                    content: Logo,
                },
                {
                    property: 'og:image:width',
                    content: '723',
                },
                {
                    property: 'og:image:height',
                    content: '423',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: queries.site.siteMetadata.author,
                },
                {
                    name: 'twitter:title',
                    content: title,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
                {
                    name: 'format-detection',
                    content: 'telephone=no',
                },
                {
                    name: 'yandex-verification',
                    content: '4ddb94bbff872c63',
                },
                {
                    name: 'referrer',
                    content: 'origin',
                },
                ...(no_index || is_ach_page
                    ? [
                          {
                              name: 'robots',
                              content: 'noindex',
                          },
                      ]
                    : []),
            ]}
        >
            {languages.map(locale => {
                if (!(locale === 'ach')) {
                    const replaced_local = locale.replace('_', '-')
                    const is_default = locale === 'en' || locale === 'x-default'
                    const href_lang = is_default ? '' : `/${replaced_local}`
                    const href = `${site_url}${href_lang}${current_page}`

                    return (
                        <link
                            rel="alternate"
                            hreflang={replaced_local}
                            href={href}
                            key={replaced_local}
                        />
                    )
                }
            })}
        </Helmet>
    )
}
