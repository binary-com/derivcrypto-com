import React from 'react'
import { localize, Localize, WithIntl } from 'components/localization'
import { Layout, SEO } from 'components/page-elements'

const Home = () => {
    return (
        <Layout>
            <SEO
                title={localize('Derivcrypto')}
                description={localize(
                    'Trade forex, commodities, cryptocurrencies, synthetic and stock indices - commission-free and directly from your crypto wallets.',
                )}
            />
            <p>{localize('Deriv with Crypto')}</p>
            <p>
                <Localize translate_text="Trade forex, commodities, cryptocurrencies, synthetic and stock indices - commission-free and directly from your crypto wallets." />
            </p>
        </Layout>
    )
}

export default WithIntl()(Home)
