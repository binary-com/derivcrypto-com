import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledInput, StyledText, LogoWrapper, StyledImage, HeroContainer } from './_home-style'
import { Media } from 'themes'
import { WhiteText, Button, Background, Flex, Image, Text } from 'components/elements'
import { localize } from 'components/localization'
import FacebookLogo from 'images/svg/home/facebook.svg'
import GoogleLogo from 'images/svg/home/google.svg'

const query = graphql`
    query {
        hero: file(relativePath: { eq: "home/hero-image.png" }) {
            ...fadeIn
        }
        background: file(relativePath: { eq: "home/hero-background.png" }) {
            ...fadeIn
        }
    }
`

export const Hero = () => {
    const data = useStaticQuery(query)
    return (
        <Background data={data['background']}>
            <HeroContainer>
                <Flex alignItems="center">
                    <Flex
                        flexDirection="column"
                        maxWidth={{ _: '100%', xl: '428px' }}
                        marginRight={{ _: '0', xl: '56px' }}
                    >
                        <Text
                            color="text_colored_background"
                            as="h1"
                            fontSize={{ _: '3xl', md: '4xl', xl: '6xl' }}
                        >
                            {localize('Deriv')}
                        </Text>
                        <Text
                            color="text_colored_background"
                            as="h1"
                            fontSize={{ _: '3xl', md: '4xl', xl: '6xl' }}
                        >
                            {localize('with Crypto')}
                        </Text>
                        <StyledText as="p" fontSize={{ _: 'lg', md: 'xl' }}>
                            {localize(
                                'Trade forex, commodities, synthetic and stock indices with the world’s leading cryptocurrencies.',
                            )}
                        </StyledText>
                        <Media lessThan="desktop">
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
                        <Flex alignItems="center">
                            <WhiteText as="p" size="s">
                                {localize('Or sign in with')}
                            </WhiteText>

                            <LogoWrapper>
                                <img src={GoogleLogo} alt="Google" />
                            </LogoWrapper>
                            <LogoWrapper>
                                <img src={FacebookLogo} alt="Facebook" />
                            </LogoWrapper>
                        </Flex>
                    </Flex>
                    <div>
                        <Media greaterThanOrEqual="desktop">
                            <Image
                                data={data.hero}
                                alt="platform devices"
                                width="688px"
                                height="382px"
                            />
                        </Media>
                    </div>
                </Flex>
            </HeroContainer>
        </Background>
    )
}
