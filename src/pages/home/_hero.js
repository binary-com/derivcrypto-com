import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    StyledSectionContainer,
    StyledInput,
    StyledText,
    StyledFollow,
    LogoWrapper,
    Header,
    StyledImage,
} from './_home-style'
import { Media } from 'themes'
import { WhiteText, Button, Container } from 'components/elements'
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
                <Media lessThan="tablet">
                    <StyledImage
                        data={data.hero}
                        alt="platform devices"
                        width="288px"
                        height="161px"
                    />
                </Media>

                <StyledInput placeholder={localize('Your email')} />
                <Button primary width={1} mt="xs" mb="m">
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
