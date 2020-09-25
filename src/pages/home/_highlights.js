import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { PartitionContainer, TextWrapper, ContentWrapper, HighLightsImage } from './_home-style'
import { localize } from 'components/localization'
import { SectionContainer, Text } from 'components/elements'

const query = graphql`
    query {
        anytime: file(relativePath: { eq: "home/anytime-anywhere.png" }) {
            ...fadeIn
        }
        crypto: file(relativePath: { eq: "home/crypto-wallets.png" }) {
            ...fadeIn
        }
        deposit: file(relativePath: { eq: "home/minimum-deposit.png" }) {
            ...fadeIn
        }
    }
`

export const Highlights = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <PartitionContainer no_padding_top>
                <ContentWrapper>
                    <TextWrapper>
                        <Text
                            fontSize={{ _: 'xl', xxl: '4xl' }}
                            mb="m"
                            as="h3"
                            textAlign={{ _: 'center', xxl: 'left' }}
                        >
                            {localize('Anywhere, anytime')}
                        </Text>
                        <Text fontSize={{ _: 'm', xxl: 'xl' }} m="auto" textAlign="justify">
                            {localize(
                                'Get on-board hassle-free, trade, and transfer funds to and from your trading account in the fewest taps on your mobile, or clicks on your computer.',
                            )}
                        </Text>
                    </TextWrapper>
                    <HighLightsImage
                        data={data.anytime}
                        alt="platform devices"
                        width={{ _: '300px', xxl: '588px' }}
                        height={{ _: '374px', xxl: '690px' }}
                    />
                </ContentWrapper>
            </PartitionContainer>
            <PartitionContainer greybackground>
                <ContentWrapper>
                    <TextWrapper>
                        <Text
                            fontSize={{ _: 'xl', xxl: '4xl' }}
                            mb="m"
                            as="h3"
                            textAlign={{ _: 'center', xxl: 'left' }}
                        >
                            {localize('Crypto wallets included')}
                        </Text>
                        <Text fontSize={{ _: 'm', xxl: 'xl' }} m="auto" textAlign="justify">
                            {localize(
                                'Get on-board hassle-free, trade, and transfer funds to and from your trading account in the fewest taps on your mobile, or clicks on your computer.',
                            )}
                        </Text>
                    </TextWrapper>
                    <HighLightsImage
                        margin="auto"
                        data={data.crypto}
                        alt="platform devices"
                        width={{ _: '292px', xxl: '528px' }}
                        height={{ _: '288px', xxl: '528px' }}
                    />
                </ContentWrapper>
            </PartitionContainer>
            <PartitionContainer>
                <ContentWrapper>
                    <TextWrapper>
                        <Text
                            fontSize={{ _: 'xl', xxl: '4xl' }}
                            mb="m"
                            as="h3"
                            textAlign={{ _: 'center', xxl: 'left' }}
                        >
                            {localize('No minimum deposit')}
                        </Text>
                        <Text fontSize={{ _: 'm', xxl: 'xl' }} m="auto" textAlign="justify">
                            {localize(
                                'With no minimum deposit and low stake amounts, anyone can start trading from anywhere.',
                            )}
                        </Text>
                    </TextWrapper>
                    <HighLightsImage
                        margin="auto"
                        data={data.deposit}
                        alt="platform devices"
                        width={{ _: '276px', xxl: '528px' }}
                        height={{ _: '164px', xxl: '314px' }}
                    />
                </ContentWrapper>
            </PartitionContainer>
        </SectionContainer>
    )
}
