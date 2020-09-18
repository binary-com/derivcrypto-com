import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledButton, StyledSectionContainer } from './_styles'
import { Container, Flex } from 'components/elements/container'
import { Input } from 'components/elements/input'
import { Text } from 'components/elements'
import { Image } from 'components/elements/image'
import { localize } from 'components/localization'
import FacebookLogo from 'images/svg/home/facebook.svg'
import GoogleLogo from 'images/svg/home/google.svg'

const query = graphql`
    query {
        hero: file(relativePath: { eq: "home/hero_image.png" }) {
            ...fadeIn
        }
    }
`

export const Hero = () => {
    const data = useStaticQuery(query)
    return (
        <StyledSectionContainer>
            <Container>
                <Text as="h1" size="3xl">
                    {localize('Deriv with Crypto')}
                </Text>
                <Text as="p" size="l">
                    {localize(
                        'Trade forex, commodities, cryptocurrencies, synthetic and stock indices - commission-free and directly from your crypto wallets.',
                    )}
                </Text>
                <Image data={data.hero} alt="platform devices" width="100%" height="181px" />
                <Input placeholder={localize('Your email')} />
                <StyledButton primary>{localize('Get started')}</StyledButton>
                <Flex>
                    <Text as="p" size="s">
                        {localize('Or sign in with')}
                    </Text>
                    <img src={GoogleLogo} alt="Google" />
                    <img src={FacebookLogo} alt="Facebook" />
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}
