import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ShadowImage } from './_home-style'
import {
    SectionContainer,
    Container,
    Text,
    Flex,
    VFlex,
    Button,
    Carousel,
} from 'components/elements'
import { localize } from 'components/localization'
import DTraderLogo from 'images/svg/home/dtrader-logo.svg'
import Dmt5Logo from 'images/svg/home/dmt5-logo.svg'
import DBotLogo from 'images/svg/home/dbot-logo.svg'

const query = graphql`
    query {
        dbot: file(relativePath: { eq: "home/dbot.png" }) {
            ...fadeIn
        }
        dmt5: file(relativePath: { eq: "home/dmt5.png" }) {
            ...fadeIn
        }
        dtrader: file(relativePath: { eq: "home/dtrader.png" }) {
            ...fadeIn
        }
    }
`

const SlideContent = ({ icon, header, description, btntext, image }) => {
    return (
        <VFlex alignItems={'start'}>
            <img src={icon} alt="" />
            <Text mt={'m'} mb={'m'} fontSize={{ _: 'xl' }} fontWeight={'bold'}>
                {header}
            </Text>
            <Text mb={'m'}>{description}</Text>
            <Button mb={'m'} primary>
                {btntext}
            </Button>
            <Flex height={221} margin={'auto'}>
                <ShadowImage data={image} width={271} height={166} margin={'auto'}></ShadowImage>
            </Flex>
        </VFlex>
    )
}

export const TradingPlatformsTypes = () => {
    const data = useStaticQuery(query)

    const dtrader = {
        icon: DTraderLogo,
        header: localize('DTrader'),
        description: localize('A powerful yet easy to use trading platform.'),
        btntext: localize('Explore DTrader now'),
        image: data.dtrader,
    }

    const dmt5 = {
        icon: Dmt5Logo,
        header: localize('DMT5'),
        description: localize(
            'Trade on the Deriv MetaTrader 5 (DMT5) platform, the choice of professionals.',
        ),
        btntext: localize('Explore DMT5 now'),
        image: data.dmt5,
    }

    const dbot = {
        icon: DBotLogo,
        header: localize('DBot'),
        description: localize('Automated trading at your fingertips. No coding needed.'),
        btntext: localize('Explore DBot now'),
        image: data.dbot,
    }

    const slides = [dtrader, dmt5, dbot]

    return (
        <SectionContainer backgroundColor={'background_section'}>
            <Container>
                <Text mb={'m'} fontSize={{ _: 'xl' }} textAlign={'center'} fontWeight={'bold'}>
                    {localize('Trading platforms and trade types')}
                </Text>
                <Carousel>
                    {slides.map((slide, idx) => (
                        <Carousel.Item key={idx}>
                            <SlideContent
                                icon={slide.icon}
                                header={slide.header}
                                description={slide.description}
                                btntext={slide.btntext}
                                image={slide.image}
                            ></SlideContent>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </SectionContainer>
    )
}
