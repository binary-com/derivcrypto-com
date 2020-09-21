import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    StyledSectionContainer,
    StyledInput,
    StyledText,
    StyledFollow,
    LogoWrapper,
    Header,
} from './_home-style'
import { Container } from 'components/elements/container'
import { WhiteText, Button } from 'components/elements'
import { Image } from 'components/elements/image'
import { localize } from 'components/localization'
import FacebookLogo from 'images/svg/home/facebook.svg'
import GoogleLogo from 'images/svg/home/google.svg'

const query = graphql`
    query {
        hero: file(relativePath: { eq: "home/hero-image.png" }) {
            ...fadeIn
        }
    }
`

export const Hero = () => {
    const data = useStaticQuery(query)
    return (
        <StyledSectionContainer>
            <Container>
                <Header as="h1" fontSize="3xl">
                    {localize('Deriv with Crypto')}
                </Header>
                <StyledText as="p" fontSize="lg">
                    {localize(
                        'Trade forex, commodities, cryptocurrencies, synthetic and stock indices - commission-free and directly from your crypto wallets.',
                    )}
                </StyledText>
                <Image data={data.hero} alt="platform devices" width="100%" height="161px" />
                <StyledInput placeholder={localize('Your email')} />
                <Button primary width={1} mt={2} mb={3}>
                    {localize('Get started')}
                </Button>
                <StyledFollow>
                    <WhiteText as="p" size="s">
                        {localize('Or sign in with')}
                    </WhiteText>

                    <LogoWrapper>
                        <img src={GoogleLogo} alt="Google" />
                    </LogoWrapper>
                    <LogoWrapper>
                        <img src={FacebookLogo} alt="Facebook" />
                    </LogoWrapper>
                </StyledFollow>
            </Container>
        </StyledSectionContainer>
    )
}
