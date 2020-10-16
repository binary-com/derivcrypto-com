import React from 'react'
import {
    CardContainer,
    CardHeader,
    CardContent,
    MarketsPartitionContainer,
    StyledLogo,
    TradeMarketsDesktop,
    TradeMarketsMobile,
} from './_home-style'
import { Flex, SectionContainer, Carousel, WhiteText } from 'components/elements'
import { Localize, localize } from 'components/localization'
import CommoditiesLogo from 'images/svg/home/commodities.svg'
import ForexLogo from 'images/svg/home/forex.svg'
import SyntheticIndicesLogo from 'images/svg/home/synthetic-indices.svg'
import StockIndicesLogo from 'images/svg/home/stock-indices.svg'

const Card = ({ title, content, image }) => {
    return (
        <CardContainer>
            <Flex m="auto">
                <StyledLogo>
                    <img src={image} alt={title} />
                </StyledLogo>
                <CardHeader>{title}</CardHeader>
            </Flex>
            <CardContent>{content}</CardContent>
        </CardContainer>
    )
}

export const TradeMarkets = () => {
    const forex = {
        title: <Localize translate_text="Forex" />,
        content: (
            <Localize translate_text="Trade the world’s largest financial market with popular and exotic forex pairs." />
        ),
        image: ForexLogo,
    }

    const syntheticIndices = {
        title: <Localize translate_text="Synthetic indices" />,
        content: (
            <Localize translate_text="Trade synthetic markets that simulate real-world market movements." />
        ),
        image: SyntheticIndicesLogo,
    }

    const commodities = {
        title: <Localize translate_text="Commodities" />,
        content: (
            <Localize translate_text="Trade natural resources that are central to the world’s economy." />
        ),
        image: CommoditiesLogo,
    }

    const stockIndices = {
        title: <Localize translate_text="Stock indices" />,
        content: (
            <Localize translate_text="Trade on border market trends and diversify your risk." />
        ),
        image: StockIndicesLogo,
    }

    const markets = [forex, syntheticIndices, commodities, stockIndices]
    return (
        <SectionContainer>
            <MarketsPartitionContainer trade_markets>
                <WhiteText as="h3" textAlign="center" fontSize={{ _: 'xl', xxl: '4xl' }}>
                    {localize('Markets to trade')}
                </WhiteText>
                <TradeMarketsMobile>
                    <Carousel primary isMarkets={true} options={{ axis: 'x' }}>
                        {markets.map((market, idx) => (
                            <Carousel.Item key={idx}>
                                <Card
                                    key={market.title}
                                    title={market.title}
                                    content={market.content}
                                    image={market.image}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </TradeMarketsMobile>
                <TradeMarketsDesktop>
                    <Card
                        title={localize('Forex')}
                        content={localize(
                            'Trade the world’s largest financial market with popular and exotic forex pairs.',
                        )}
                        image={ForexLogo}
                    ></Card>
                    <Card
                        title={localize('Synthetic indices')}
                        content={localize(
                            'Trade synthetic markets that simulate real-world market movements.',
                        )}
                        image={SyntheticIndicesLogo}
                    ></Card>
                    <Card
                        title={localize('Commodities')}
                        content={localize(
                            'Trade natural resources that are central to the world’s economy.',
                        )}
                        image={CommoditiesLogo}
                    ></Card>
                    <Card
                        title={localize('Stock indices')}
                        content={localize('Trade on border market trends and diversify your risk.')}
                        image={StockIndicesLogo}
                    ></Card>
                </TradeMarketsDesktop>
            </MarketsPartitionContainer>
        </SectionContainer>
    )
}
