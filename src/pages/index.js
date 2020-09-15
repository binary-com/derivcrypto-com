import React from 'react'
import { Nav } from 'components/elements/nav'
import { localize, Localize, WithIntl } from 'components/localization'

const Home = () => {
    return (
        <Nav>
            <p>{localize('Deriv with Crypto')}</p>
            <p>
                <Localize translate_text="Trade forex, commodities, cryptocurrencies, synthetic and stock indices - commission-free and directly from your crypto wallets." />
            </p>
        </Nav>
    )
}

export default WithIntl()(Home)
