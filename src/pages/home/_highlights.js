import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    PartitionContainer,
    TextWrapper,
    ContentWrapper,
    HighLightsImage,
    HighlightsHeader,
    HighlightsContent,
} from './_home-style'
import { localize } from 'components/localization'
import { SectionContainer } from 'components/elements'

const query = graphql`
    query {
        anytime: file(relativePath: { eq: "home/anytime-anywhere.jpg" }) {
            ...fadeIn
        }
        crypto: file(relativePath: { eq: "home/crypto-wallets.png" }) {
            ...fadeIn
        }
        deposit: file(relativePath: { eq: "home/minimum-deposit.jpg" }) {
            ...fadeIn
        }
    }
`

export const Highlights = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer backgroundColor="background_default">
            <PartitionContainer no_padding_top>
                <ContentWrapper>
                    <TextWrapper>
                        <HighlightsHeader as="h2">{localize('Anywhere, anytime')}</HighlightsHeader>
                        <HighlightsContent>
                            {localize(
                                'Get on-board hassle-free, trade, and transfer funds to and from your trading account in the fewest taps on your mobile, or clicks on your computer.',
                            )}
                        </HighlightsContent>
                    </TextWrapper>
                    <HighLightsImage
                        data={data.anytime}
                        alt="highlights anytime"
                        width={{ _: '300px', xxl: '588px' }}
                        height={{ _: '100%', xxl: '100%' }}
                    />
                </ContentWrapper>
            </PartitionContainer>
            <PartitionContainer greybackground>
                <ContentWrapper>
                    <TextWrapper>
                        <HighlightsHeader as="h2">
                            {localize('Crypto wallets included')}
                        </HighlightsHeader>
                        <HighlightsContent>
                            {localize(
                                'Frictionless access to BTC, ETH and ERC-20 tokens. Fund your trading account and cash out instantly, whenever you like.',
                            )}
                        </HighlightsContent>
                    </TextWrapper>
                    <HighLightsImage
                        margin="auto"
                        data={data.crypto}
                        alt="crypto wallet"
                        width={{ _: '292px', xxl: '528px' }}
                        height={{ _: '100%', xxl: '528px' }}
                    />
                </ContentWrapper>
            </PartitionContainer>
            <PartitionContainer>
                <ContentWrapper>
                    <TextWrapper>
                        <HighlightsHeader as="h3">
                            {localize('No minimum deposit')}
                        </HighlightsHeader>
                        <HighlightsContent>
                            {localize(
                                'With no minimum deposit and low stake amounts, anyone can start trading from anywhere.',
                            )}
                        </HighlightsContent>
                    </TextWrapper>
                    <HighLightsImage
                        margin="auto"
                        data={data.deposit}
                        alt="deposit"
                        width={{ _: '276px', xxl: '480px' }}
                        height={{ _: '100%', xxl: '285px' }}
                    />
                </ContentWrapper>
            </PartitionContainer>
        </SectionContainer>
    )
}
