import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { TradeBenefitsImgMobile, TradeBenefitsImgDesktop, CardWrapper } from './_home-style'
import { Text, SectionContainer, Image, Background } from 'components/elements'
import { localize } from 'components/localization'

const query = graphql`
    query {
        markets_mb: file(relativePath: { eq: "home/mobile/tradebenefits-markets.png" }) {
            ...fadeIn
        }
        ta_mb: file(relativePath: { eq: "home/mobile/tradebenefits-ta.png" }) {
            ...fadeIn
        }
        td_mb: file(relativePath: { eq: "home/mobile/tradebenefits-td.png" }) {
            ...fadeIn
        }
        ct_mb: file(relativePath: { eq: "home/mobile/tradebenefits-ct.png" }) {
            ...fadeIn
        }
        it_mb: file(relativePath: { eq: "home/mobile/tradebenefits-it.png" }) {
            ...fadeIn
        }
        markets_dt: file(relativePath: { eq: "home/desktop/tradebenefits-markets.png" }) {
            ...fadeIn
        }
        ta_dt: file(relativePath: { eq: "home/desktop/tradebenefits-ta.png" }) {
            ...fadeIn
        }
        td_dt: file(relativePath: { eq: "home/desktop/tradebenefits-td.png" }) {
            ...fadeIn
        }
        ct_dt: file(relativePath: { eq: "home/desktop/tradebenefits-ct.png" }) {
            ...fadeIn
        }
        it_dt: file(relativePath: { eq: "home/desktop/tradebenefits-it.png" }) {
            ...fadeIn
        }
    }
`
const Card = ({ header, content, image }) => {
    return (
        <CardWrapper>
            <Background data={image}>
                <Text>{localize(header)}</Text>
                <Text>{localize(content)}</Text>
            </Background>
        </CardWrapper>
    )
}
export const TradeBenefits = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <Text as="h3" textAlign="center">
                {localize('Trade the way you want')}
            </Text>
            <TradeBenefitsImgMobile>
                <Image data={data.markets_mb} alt="platform_devices"></Image>
                <Image data={data.ta_mb} alt="platform_devices"></Image>
                <Image data={data.td_mb} alt="platform_devices"></Image>
                <Image data={data.ct_mb} alt="platform_devices"></Image>
                <Image data={data.it_mb} alt="platform_devices"></Image>
            </TradeBenefitsImgMobile>
            <TradeBenefitsImgDesktop>
                <Card
                    image={data.markets_mb}
                    content="This is content"
                    header="This is header"
                ></Card>
            </TradeBenefitsImgDesktop>
        </SectionContainer>
    )
}
