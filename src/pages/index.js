import React from 'react'
import { Hero } from './home/_hero'
import { Highlights } from './home/_highlights'
import { TradeBenefits } from './home/_trade-benefits'
import { localize, WithIntl } from 'components/localization'
import { Layout, SEO, Footer } from 'components/page-elements'

const Home = () => {
    return (
        <Layout>
            <SEO
                title={localize('Derivcrypto')}
                description={localize(
                    'Trade forex, commodities, cryptocurrencies, synthetic and stock indices - commission-free and directly from your crypto wallets.',
                )}
            />
            <Hero />
            <Highlights />
            <TradeBenefits />
            <Footer />
        </Layout>
    )
}

export default WithIntl()(Home)
