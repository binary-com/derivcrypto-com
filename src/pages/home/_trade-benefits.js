import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { TradeBenefitsImg } from './_home-style'
import { Text, SectionContainer, Image } from 'components/elements'
import { localize } from 'components/localization'

const query = graphql`
    query {
        markets: file(relativePath: { eq: "home/tradebenefits-markets.png" }) {
            ...fadeIn
        }
        ta: file(relativePath: { eq: "home/tradebenefits-ta.png" }) {
            ...fadeIn
        }
        td: file(relativePath: { eq: "home/tradebenefits-td.png" }) {
            ...fadeIn
        }
        ct: file(relativePath: { eq: "home/tradebenefits-ct.png" }) {
            ...fadeIn
        }
        it: file(relativePath: { eq: "home/tradebenefits-it.png" }) {
            ...fadeIn
        }
    }
`

export const TradeBenefits = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <Text as="h3" textAlign="center">
                {localize('Trade the way you want')}
            </Text>
            <TradeBenefitsImg>
                <Image data={data.markets} alt="platform_devices"></Image>
                <Image data={data.ta} alt="platform_devices"></Image>
                <Image data={data.td} alt="platform_devices"></Image>
                <Image data={data.ct} alt="platform_devices"></Image>
                <Image data={data.it} alt="platform_devices"></Image>
            </TradeBenefitsImg>
        </SectionContainer>
    )
}
