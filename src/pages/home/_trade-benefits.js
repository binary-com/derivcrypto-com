import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    TradeBenefitsImgMobile,
    TradeBenefitsImgDesktop,
    CardWrapper,
    CardHeader,
    CardContent,
    StyledBackground,
} from './_home-style'
import { Text, SectionContainer } from 'components/elements'
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
            <StyledBackground data={image}>
                <CardHeader>{header}</CardHeader>
                <CardContent>{content}</CardContent>
            </StyledBackground>
        </CardWrapper>
    )
}

export const TradeBenefits = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer backgroundColor="background_default">
            <Text as="h2" textAlign="center" fontSize={{ _: 'xl', xxl: '4xl' }}>
                {localize('Trade the way you want')}
            </Text>
            <TradeBenefitsImgMobile>
                <Card
                    image={data.markets_mb}
                    content={localize('Markets')}
                    header={localize('4')}
                ></Card>
                <Card
                    image={data.ta_mb}
                    content={localize('Tradeable assets')}
                    header={localize('100+')}
                ></Card>
                <Card
                    image={data.td_mb}
                    content={localize('Trade duration')}
                    header={localize('1s-365d')}
                ></Card>
                <Card
                    image={data.ct_mb}
                    content={localize('Chart types')}
                    header={localize('3')}
                ></Card>
                <Card
                    image={data.it_mb}
                    content={localize('Indicators and tools')}
                    header={localize('100+')}
                ></Card>
            </TradeBenefitsImgMobile>
            <TradeBenefitsImgDesktop>
                <Card
                    image={data.markets_dt}
                    content={localize('Markets')}
                    header={localize('4')}
                ></Card>
                <Card
                    image={data.ta_dt}
                    content={localize('Tradeable assets')}
                    header={localize('100+')}
                ></Card>
                <Card
                    image={data.td_dt}
                    content={localize('Trade duration')}
                    header={localize('1s-365d')}
                ></Card>
                <Card
                    image={data.ct_dt}
                    content={localize('Chart types')}
                    header={localize('3')}
                ></Card>
                <Card
                    image={data.it_dt}
                    content={localize('Indicators and tools')}
                    header={localize('100+')}
                ></Card>
            </TradeBenefitsImgDesktop>
        </SectionContainer>
    )
}
